import { useSelector } from "react-redux";
import { BlurWrap, HomeLogin } from "./Pages.styled";
import { selectIsLoggedIn, selectUser } from "redux/auth/auth-selectors";
import { Text } from "components/LoginForm/LoginForm.styled";
import { LoginOutlined } from "@ant-design/icons";

// const styles = {
//   container: {
//     minHeight: 'calc(50vh - 50px)',
//     minWidth: 'calc(50vw - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//   },
//   title: {
//     fontWeight: 700,
//     fontSize: 30,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return(

    <BlurWrap >
      {isLoggedIn ? (<><Text >
          Hi, {user.name}! <br />
          Welcome to your phonebook. </Text>
        </>) :
          (<><Text component="h1" variant="h3" color="inherit" gutterBottom>
            Hello! I'm your phonebook. </Text>
            <Text>
              Please log in to your account or register.
            </Text>
            <HomeLogin to="/login"><LoginOutlined /> Login</HomeLogin>
        </>)}
    </BlurWrap>
  )
};

        // <div style={styles.container}>
        //     <h1 style={styles.title}>Home page of the Phonebook</h1>
        //     <p>Lets get started!</p>
// </div>
        