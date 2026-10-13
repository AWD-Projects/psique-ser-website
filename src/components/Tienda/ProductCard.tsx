import React, { useState } from "react";
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
    Modal,
    IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ProductCardProps {
    imageUrl: string;
    name: string;
    price: number;
    description: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    name,
    price,
    description,
}) => {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleOpen = () => {
        setQuantity(1);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            <Card
                sx={{
                    height: 700,
                    overflow: "hidden",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    ":hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 6,
                    },
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="img"
                    height="400"
                    image={imageUrl}
                    alt={name}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography
                            fontSize="16px"
                            fontWeight="bold"
                            gutterBottom
                        >
                            {name.toUpperCase()}
                        </Typography>
                        <Typography variant="h6" color="primary" mb={2}>
                            ${price.toFixed(2)}
                        </Typography>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                            mb={2}
                            sx={{
                                bgcolor: "grey.100",
                                px: 2,
                                py: 1,
                                borderRadius: 5,
                                width: "fit-content",
                                mx: "auto",
                                boxShadow: 1,
                            }}
                        >
                            <IconButton
                                onClick={decreaseQty}
                                size="small"
                                color="primary"
                                sx={{
                                    bgcolor: "white",
                                    borderRadius: "50%",
                                    transition: "0.2s",
                                    ":hover": { bgcolor: "grey.200" },
                                }}
                            >
                                <RemoveIcon fontSize="small" />
                            </IconButton>

                            <Typography
                                variant="body1"
                                fontWeight="medium"
                                sx={{ minWidth: 24, textAlign: "center" }}
                            >
                                {quantity}
                            </Typography>

                            <IconButton
                                onClick={increaseQty}
                                size="small"
                                color="primary"
                                sx={{
                                    bgcolor: "white",
                                    borderRadius: "50%",
                                    transition: "0.2s",
                                    ":hover": { bgcolor: "grey.200" },
                                }}
                            >
                                <AddIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={1}>
                    <Button
                            variant="contained"
                            startIcon={<ShoppingCartIcon />}
                            fullWidth
                            onClick={() => {
                                const message = `Hola, quiero comprar ${quantity} unidad(es) del producto "${name}" por un total de $${(price * quantity).toFixed(2)}.`;
                                const whatsappUrl = `https://wa.me/525535208014?text=${encodeURIComponent(message)}`;
                                window.open(whatsappUrl, "_blank");
                                handleClose();
                            }}
                            sx={{ borderRadius: 2, textTransform: "none" }}
                        >
                            Comprar
                        </Button>
                        <Button
                            variant="text"
                            startIcon={<InfoIcon />}
                            fullWidth
                            onClick={handleOpen}
                            sx={{
                                textTransform: "none",
                                fontWeight: 500,
                                color: "text.secondary",
                                ":hover": { textDecoration: "underline" },
                            }}
                        >
                            Ver detalles
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "90%", sm: 500 },
                        maxHeight: "80vh",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 3,
                        overflowY: "auto",
                    }}
                >
                    <Typography fontSize="20px" fontWeight="bold" mb={1}>
                        {name}
                    </Typography>
                    <Typography mb={2}>
                        Precio unitario: <strong>${price.toFixed(2)}</strong>
                    </Typography>

                    {description?.length > 0 && (
                        <Box textAlign="left">
                            <Typography fontWeight="bold" gutterBottom>
                                Descripción:
                            </Typography>
                            <ul style={{ paddingLeft: "20px", marginTop: 0 }}>
                                {description.map((line, idx) => (
                                    <li key={idx}>
                                        <Typography variant="body2">
                                            {line}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    )}

                    <Box mt={4} display="flex" justifyContent="center">
                        <Button
                            variant="outlined"
                            onClick={handleClose}
                            sx={{ borderRadius: 2 }}
                        >
                            Cerrar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ProductCard;
