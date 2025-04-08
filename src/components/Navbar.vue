<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import logo from '@/assets/img/logo.png';

const router = useRouter();

// Create a reactive variable to track authentication status
const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true');

// Update the authentication status whenever localStorage changes
watch(
  () => localStorage.getItem('isAuthenticated'),
  (newValue) => {
    isAuthenticated.value = newValue === 'true';
  }
);

// Function to handle logout
const logout = () => {
  localStorage.removeItem('isAuthenticated');
  isAuthenticated.value = false;  // Update the ref after logout
  router.push('/login');  // Redirect to the login page
};

// Helper function to check if the current link is active
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-blue-600-300 border-b bg-blue-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <!-- Home Link -->
              <RouterLink
                to="/"
                :class="[isActiveLink('/') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']"
              >
                Home
              </RouterLink>

              <!-- Jobs Link -->
              <RouterLink
                to="/jobs"
                :class="[isActiveLink('/jobs') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']"
              >
                Jobs
              </RouterLink>

              <!-- Add Job Link -->
              <RouterLink
                to="/jobs/add"
                :class="[isActiveLink('/jobs/add') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']"
              >
                Add Job
              </RouterLink>

              <!-- Conditionally render Login/Logout links based on authentication status -->
              <template v-if="isAuthenticated">
                <!-- If authenticated, show Logout -->
                <button
                  @click="logout"
                  class="text-white px-3 py-2 rounded-md hover:bg-gray-900"
                >
                  Logout
                </button>
              </template>
            <!-- <template v-else>
               
                <RouterLink
                  to="/login"
                  :class="[isActiveLink('/login') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']"
                >
                  Login
                </RouterLink>
              </template>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
