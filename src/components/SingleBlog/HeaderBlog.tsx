import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface HeaderBlogProps {
    post: {
        date: string;
        author: string;
        title: string;
        image: string;
    };
}

const HeaderBlog: React.FC<HeaderBlogProps> = ({ post }) => {
    return (
        <Box sx={{ pt: { xs: 12, md: 15} }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "inline-block",
                            backgroundColor: "#034873",
                            color: "white",
                            borderRadius: "999px",
                            px: 1.5,
                            py: 0.5,
                        }}
                        >
                        <Typography variant="overline" sx={{ fontSize: 12, lineHeight: 1 }}>
                            {post.date}
                        </Typography>
                        </Box>

                        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mt: 1 }}>
                            {post.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 2, color: "#444" }}>
                            {post.author}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} display="flex" justifyContent="center" alignItems="center">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={500}
                            height={300}
                            style={{ borderRadius: "12px" }}
                        />
                    </Grid>
                    <Container maxWidth="lg" sx={{paddingTop:4}}>
                        <Divider sx={{ mb: 4 }} />
                    </Container>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeaderBlog;
