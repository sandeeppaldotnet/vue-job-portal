<script setup>
import { ref, onMounted } from 'vue';

const title = 'Job Portal For Developer';
const subtitle = 'Find the Vue job that matches your skills and needs';
const typingDone = ref(false);

onMounted(() => {
  // Simulate typing completion after 4 seconds (adjust as needed)
  setTimeout(() => {
    typingDone.value = true;
  }, 4000); // Adjust this to match the typing duration
});
</script>

<template>
  <section class="bg-blue-700 py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <!-- Apply the typing effect with a dynamic class to stop cursor -->
        <h1
          class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl typing-effect"
          :class="{'done': typingDone}"
        >
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.typing-effect {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 0; /* Initial width is 0 */
  animation: typing 4s steps(40) 1s forwards, blink 0.75s step-end infinite;
  border-right: 2px solid white; /* Blinking cursor */
}

.typing-effect.done {
  animation: typing 4s steps(40) 1s forwards; /* Stops the typing animation */
  border-right: none; /* Removes the cursor */
}

.typing-effect:after {
  content: '';
  display: inline-block;
  margin-left: 5px;
  border-right: 2px solid white; /* Cursor */
  animation: blink 0.75s step-end infinite;
}
</style>
