import api from "./api";
import TokenService from "./token.service";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
class AuthService {
  login({ email, password }) {
    console.log(email)
    console.log(password)
    return api
      .post("/auth/signin", {
        email,
        password
      })
      .then((response) => {
        console.log("authservice : " + response)

        // 알람
        createToast(
          { title: 'Login Success',  },
          // {position:'bottom-right',showIcon:true,toastBackgroundColor:'#44ec3e'}
          { type:'success', showIcon:true, position:'bottom-right', }
          )

        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      })
      .catch((err) => {
        // 알람
        createToast(
          { title: 'Login Failed',  },
          // {position:'bottom-right',showIcon:true,toastBackgroundColor:'#44ec3e'}
          { type:'danger', showIcon:true, position:'bottom-right', }
          )
        console.log(err)
      })
  }

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password,roles, name}) {
    return api.post("/auth/signup", {
      username,
      email,
      password,
      roles,
      name,
    })
    .then(
      createToast(
        { title: 'Signup Success',  },
        // {position:'bottom-right',showIcon:true,toastBackgroundColor:'#44ec3e'}
        { type:'success', showIcon:true, position:'bottom-right', }
        )
    )
    .catch(
      createToast(
        { title: 'Signup Failed',  },
        // {position:'bottom-right',showIcon:true,toastBackgroundColor:'#44ec3e'}
        { type:'danger', showIcon:true, position:'bottom-right', }
        )
    )
  }
}

export default new AuthService();
