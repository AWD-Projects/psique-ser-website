"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import QuoteBlock from "./QuoteBlock";

interface BlogContentBlock {
  type: "paragraph" | "quote";
  text?: string;
}

interface ContentBlogProps {
  post: {
    title: string;
    excerpt: string;
    content?: BlogContentBlock[];
    tags?: string[];
  };
}

const ContentBlog: React.FC<ContentBlogProps> = ({ post }) => {
  return (
    <Box sx={{ paddingTop: 4 }}>
      <Container>
        <Grid container spacing={2}>
          {post.content?.map((block, index) => (
            <Grid
              item
              xs={12}
              key={index}
              display="flex"
              justifyContent="left"
              alignItems="left"
            >
              {block.type === "paragraph" && block.text && (
                <Typography
                  variant="body1"
                  component="div"
                  paragraph
                  dangerouslySetInnerHTML={{ __html: block.text }}
                  sx={{
                    '& ul': {
                      paddingLeft: 3,
                      marginTop: 1,
                      marginBottom: 1,
                      listStyleType: 'disc',
                    },
                    '& ol': {
                      paddingLeft: 3,
                      marginTop: 1,
                      marginBottom: 1,
                      listStyleType: 'decimal',
                    },
                    '& li': {
                      marginBottom: '0.5rem',
                    },
                  }}
                />
              )}

              {block.type === "quote" && block.text && (
                <QuoteBlock text={block.text} />
              )}
            </Grid>
          ))}

            <Container maxWidth="lg" sx={{paddingTop:4}}>
                <Divider sx={{ mb: 1 }} />
            </Container>

          {post.tags && post.tags.length > 0 && (
            <Grid item xs={12} mt={2}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                Etiquetas:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {post.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={`#${tag}`}
                    variant="outlined"
                    sx={{
                      borderColor: '#223F64',
                      color: '#223F64',
                      fontWeight: 500,
                      mb: 1,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: '#f3f3f3',
                      },
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentBlog;
