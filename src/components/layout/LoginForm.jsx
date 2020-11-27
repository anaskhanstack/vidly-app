import React from "react";

import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

import { FilterDrama } from "@material-ui/icons";
export default function Login() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <form>
        <Card elevation={20}>
          <CardContent>
            <Box height="35em" width="25em" p={4}>
              <Box textAlign="center" pb={2}>
                <FilterDrama
                  style={{ width: 80, height: 80 }}
                  color="primary"
                />

                <Typography variant="h4" gutterBottom>
                  Welcome
                </Typography>
                <Typography gutterBottom>
                  Login to continue with vidley
                </Typography>
              </Box>
              <TextField
                label="Email address"
                style={{ paddingBottom: 20 }}
                variant="outlined"
                fullWidth
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                style={{ paddingBottom: 10 }}
                fullWidth
              />
              <Box pt={1} pb={1}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ textTransform: "none" }}
                  fullWidth
                >
                  <Box component="span" p={1}>
                    Submit
                  </Box>
                </Button>
              </Box>
              <Box pt={1}>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  style={{ textTransform: "none" }}
                  fullWidth
                >
                  <Box component="span" p={1}>
                    Continue with Google
                  </Box>
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </form>
    </Grid>
  );
}
