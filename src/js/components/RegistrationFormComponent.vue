<template>
  <div class="form">
    <form ref="registrationForm" method="get" action="/base.html">
      <div class="control">
        <div class="custom-label">
          <label for="emailInput" class="form-label">E-mailadres</label>
          <span class="info-btn" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Enige info over de GDPR hier."></span>
        </div>
        <input required type="email" class="form-control" id="emailInput" aria-description="e-mail adres" v-model="email"
               placeholder="E-mailadres">
        <div class="invalid-feedback">
          E-mailadres is een verplicht veld.
        </div>
      </div>

      <div class="control">
        <div class="custom-label">
          <label for="password" class="form-label">Kies een wachtwoord</label>
          <span class="info-btn" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Enige info over de GDPR hier."></span>
        </div>
        <div class="pwd-input">
          <input required :type="showPassword ? 'text' : 'password'" class="form-control" id="password" v-model="password"
                 aria-description="wachtwoord"
                 placeholder="8+ Karakters, 1 hoofdletter">
          <div class="pwd-tgl-btn" v-on:click="togglePassword(1)"></div>
          <div class="invalid-feedback">
            Wachtwoord is verplicht.
          </div>
        </div>
      </div>

      <div class="control">
        <div class="custom-label">
          <label for="passwordRepeat" class="form-label">Herhaal wachtwoord</label>
          <span class="info-btn" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Enige info over de GDPR hier."></span>
        </div>
        <div class="pwd-input">
          <input required :type="showPasswordRepeat ? 'text' : 'password'" class="form-control" :class="passwordRepeatError ? 'is-invalid' : ''" id="passwordRepeat" v-model="passwordRepeat"
                 aria-description="herhaal wachtwoord"
                 placeholder="8+ Karakters, 1 hoofdletter">
          <div class="pwd-tgl-btn" v-on:click="togglePassword(2)"></div>
          <div class="invalid-feedback" v-if="!passwordRepeatError">
            Herhalen wachtwoord is verplicht.
          </div>
          <div class="invalid-feedback" v-if="passwordRepeatError">
            Beide wachtwoorden moeten gelijk zijn.
          </div>
        </div>
      </div>
    </form>

    <div class="control">
      <button type="button" id="confirm-btn" class="confirm-btn" v-on:click="submit($event)" tabindex="0">aan de slag!
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RegistrationFormComponent',

  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      passwordRepeatError: false,
      showPassword: false,
      showPasswordRepeat: false
    }
  },


  mounted() {
  },

  methods: {
    submit: function () {
      var isValid = this.$refs.registrationForm.checkValidity();

      if (isValid && this.password !== this.passwordRepeat) {
        this.passwordRepeatError = true;
        console.log('paswoord niet gelijk');
        isValid = false;
      }

      this.$refs.registrationForm.classList.add('was-validated');

      // submit the normal way if form is valid
      if (isValid) {
        this.$refs.registrationForm.submit()
      }
    },

    /*
    * nr selects the correct password box.
    * 1 = password, 2 = repeat password
    * */
    togglePassword(nr) {
      if (nr === 1) {
        this.showPassword = !this.showPassword;
      } else if (nr === 2) {
        this.showPasswordRepeat = !this.showPasswordRepeat;
      }
    }

  }


}
</script>
