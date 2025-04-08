<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
      <form @submit.prevent="loginUser">
        <!-- Email Field -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <!-- Password Field -->
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-sm text-center mb-4">{{ errorMessage }}</p>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Login
        </button>
      </form>

      <!-- Register Link-->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
        
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('user@jobportal.com');
    const password = ref('password@123');
    const errorMessage = ref('');
    const router = useRouter();

    // Example login credentials (you can replace this with actual validation logic)
    const loginUser = () => {
      // Check for credentials (replace with actual authentication logic)
      if (email.value === 'user@jobportal.com' && password.value === 'password@123') {
        // Store authentication state
        localStorage.setItem('isAuthenticated', 'true');
        // Redirect to home page (make sure this route exists)
        router.push({ name: 'home' }); // 'home' should be defined in your router
      } else {
        errorMessage.value = 'Invalid credentials, please try again';
      }
    };

    return {
      email,
      password,
      errorMessage,
      loginUser,
    };
  },
};
</script>

<style scoped>
/* You can add any custom styles here if needed */
</style>
