<template>
  <div class="container" >
    <form class="form" @submit.prevent="createAccount" v-if="createAccountShow">
      <h1 class="h3 mb-3 font-weight-normal">Create Account</h1>
      <label for="userName" class="sr-only">userName</label>
      <input type="text" id="userName" v-model="user.userName" class="form-control mb-3" placeholder="userName" required autofocus>
      <label for="Email" class="sr-only">Email address</label>
      <input type="email" id="Email" v-model="user.Email" class="form-control mb-3" placeholder="Email address" required autofocus>
      <label for="Password" class="sr-only">Password</label>
      <input type="password" v-model="user.Password" id="Password" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>

    </form>
    <div class="mt-3" v-if="!createAccountShow">
      <dir v-if="createAccountSuccess">帳號建立成功!</dir>
      <div></div>
      <form class="form" @submit.prevent="signIn" v-if="signInShow">
        <h1 class="h3 mb-3 font-weight-normal">請登入</h1>

        <label for="Email" class="sr-only">Email address</label>
        <input type="email" id="Email" v-model="signInData.Email" class="form-control mb-3" placeholder="Email address" required autofocus>
        <label for="Password" class="sr-only">Password</label>
        <input type="password" v-model="signInData.Password" id="Password" class="form-control" placeholder="Password" required>
        <div class="checkbox mb-3">

        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Save</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2022</p>

      </form>
      <div v-else>
        你已經登入
        <a class="btn" @click="login">登出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data()
  {
    return {
      user: {
        id:'001',
        userName:'',
        Email: '',
        Password:'',
      },
      submitData: null,
      signInData:{
        Email: '',
        Password:'',
      },
      createAccountShow: true,
      signInShow: true,
      createAccountSuccess: true,
    }
  },
  methods: {
    //建立帳戶
    createAccount()
    {
      const vm = this;
      vm.submitData = vm.user;
      console.log(vm.submitData)
       console.log('vm.user',vm.user)
       // seession Storage 將參數儲存在用戶端


      sessionStorage.setItem("id", vm.user.id)
      sessionStorage.setItem("userName", vm.user.userName)
      sessionStorage.setItem("Email", vm.user.Email)
     sessionStorage.setItem("Password", vm.user.Password)
        vm.createAccountShow = false;
        vm.createAccountSuccess = true;
        console.log('建立帳號完成')




    },
    //登入帳號
    signIn()
    {
      const vm = this;
        console.log(vm.signInData)
      if (vm.signInData.Email === vm.user.Email || vm.signInData.Password === vm.user.Password) {
        console.log('已登入')
        vm.signInShow = false;
         vm.createAccountSuccess = false;
      }
    },
    login()
    {
      const vm = this;
    //  vm.user = null,
   //   vm.signInData = null,
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("userName");
     sessionStorage.removeItem("Email");
      sessionStorage.removeItem("Password");
      //移除全部
      localStorage.clear();
      vm.signInShow = true;
      vm.createAccountShow = false;
          vm.createAccountSuccess = false;
      vm.user = {};
   vm.signInData={};
    }
  }
}
</script>
