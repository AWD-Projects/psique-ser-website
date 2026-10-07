// Inserta datos estructurados (schema.org) como JSON-LD. Se renderiza en el servidor.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            // El reemplazo de "<" evita que el contenido cierre la etiqueta <script>.
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}
