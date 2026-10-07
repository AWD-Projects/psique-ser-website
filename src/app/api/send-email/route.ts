// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configura la API Key de SendGrid desde las variables de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Límites generosos: el formulario del sitio ya limita el mensaje a 120 caracteres,
// así que ningún mensaje legítimo se acerca a estos topes.
const LIMITS = { nombre: 100, correo: 254, mensaje: 2000 } as const;

type Field = keyof typeof LIMITS;

// Escapa el HTML para que lo que escribe quien llena el formulario se muestre como texto
// y nunca se interprete como HTML (enlaces, imágenes, botones) en el correo que recibe el cliente.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Devuelve el campo si es texto y no excede su límite; si no, null.
function readField(body: unknown, key: Field): string | null {
  if (typeof body !== 'object' || body === null) return null;
  const value = (body as Record<string, unknown>)[key];
  if (typeof value !== 'string' || value.length > LIMITS[key]) return null;
  return value;
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
  }

  const nombre = readField(body, 'nombre');
  const correo = readField(body, 'correo');
  const mensaje = readField(body, 'mensaje');

  if (nombre === null || correo === null || mensaje === null) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }

  try {
    const emailText = `Nuevo mensaje de contacto de ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`;
    const emailHtml = `
      <div style="text-align: left;">
        <h3>Nuevo mensaje de contacto de ${escapeHtml(nombre)}</h3>
        <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
        <p><strong>Mensaje:</strong> ${escapeHtml(mensaje)}</p>
      </div>
    `;

    const msg = {
      to: 'psique_ser@outlook.com',  // Destinatario
      from: 'email-service@amoxtli.tech',        // Remitente (debe estar verificado en SendGrid)
      subject: 'Contacto desde el sitio web',
      text: emailText,
      html: emailHtml,
    };

    await sgMail.send(msg);
    console.log('Email sent');
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}
