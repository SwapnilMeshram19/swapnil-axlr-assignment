import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useLoginMutation } from "../features/apiSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userLoggedIn } from "../features/loggedInSlice";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
const token=useAppSelector((state)=>state.loggedIn.token);

  const dispatch = useAppDispatch();
  const [login]=useLoginMutation();
  const navigate=useNavigate();

  const handleLogin =async () => {
    const loginDetails = {
        "user_email":email,
        "user_password":password
    }

    let res =await login(loginDetails);
    let result=res.data.result;
  
    if(result.status==true){
        dispatch(userLoggedIn(result.user_details.token));
        navigate('/categories')
    }
    
  }

  return (
    <Box
      component="form"
      sx={{
        position:"absolute",
        margin:"auto",
        left:0,
        right:0,
        top:100,
        
        width: "25rem",
        backgroundColor: "white",
        padding: "4rem 5rem",
        borderRadius: "3rem",
        boxShadow: "2px 2px 10px 2px #f2f2f2",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontWeight: "600",
          mb: "3rem",
          textAlign: "left",
        }}
      >
        Login
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <TextField
          id="standard-basic"
          label="E-MAIL ID"
          type="email"
          value={email}
          autoComplete="email"
          variant="standard"
          InputLabelProps={{
            style: {
              fontSize: "1.2rem",
              fontWeight: "700",
              color: "rgb(139,144,160)",
            },
          }}
          onChange={(event)=>setEmail(event.target.value)}
          focused
          sx={{ fontWeight: "900", fontSize: "1rem" }}
        />

        <FormControl variant="standard" focused>
          <InputLabel
            htmlFor="standard-adornment-password"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "700",
              "&.Mui-focused": { color: "rgb(139,144,160)" },
            }}
          >
            PASSWORD
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            endAdornment={
              <InputAdornment
                position="end"
                onClick={() => setShowPassword(!showPassword)}
                sx={{ cursor: "pointer", }}
              >
                {showPassword ? (
                  <Visibility sx={{ color: "red",fontSize:"1.4rem" }} />
                ) : (
                  <VisibilityOff sx={{fontSize:"1.4rem" }}/>
                )}
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Typography
        variant="body2"
        sx={{
          textAlign: "left",
          pt: "0.5rem",
          color: "rgb(33,150,243)",
          fontWeight: "600",
          letterSpacing: "0.03rem",
          cursor: "pointer",
        }}
      >
        Forgot your password?
      </Typography>

      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            mt: "3rem",
            fontWeight: "600",
            letterSpacing: "0.1rem",
            backgroundColor: "rgb(5,149,136)",
            p: "0.5rem 2rem",
            "&:hover": { backgroundColor: "rgb(5,149,136)" },
          }}
          onClick={()=>handleLogin()}
        >
          Login
        </Button>
      </Box>
      
    </Box>
  );
};
