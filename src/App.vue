<template>
  <div class="main">
    <div class="container">
      <div
        class="info-box"
        v-if="state.username === '' || state.username === null"
      >
        <form action="">
          <h1>log in to chat</h1>
          <label for="Username">Username</label>
          <input
            type="text"
            name=""
            id="Username"
            placeholder="please enter your Username"
            v-model="inputUsername"
          />
          <button type="button" @click="signin">Log in</button>
        </form>
      </div>

      <div class="view-chat" v-else>
        <span @click="logout">logout</span>
        <h1>Hello, {{ state.username }}</h1>
        <div class="chat-box">
          <div
            v-for="message in state.messages"
            :key="message.key"
            :class="
              message.username == state.username
                ? 'message-box'
                : 'message-box-anther'
            "
          >
            <span>{{ message.username }}</span>
            <div class="message">
              {{ message.content }}
            </div>
          </div>
        </div>
        <footer>
          <form action="" @submit.prevent="SendMessage">
            <input
              type="text"
              class="text"
              placeholder="Enter your message"
              v-model="inputmessage"
            />
            <input type="submit" class="button" value="send" />
          </form>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./db.js";
import { ref as fbref, push, onValue } from "firebase/database";

import { reactive, ref, onMounted } from "vue";
export default {
  setup() {
    const inputmessage = ref("");
    const inputUsername = ref("");
    const state = reactive({
      username: "",
      messages: [],
    });
    const signin = () => {
      if (inputUsername.value !== "" || inputUsername.value !== null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    };
    const logout = () => {
      state.username = "";
    };

    const SendMessage = () => {
      const messagesRef = fbref(db, "messages");

      if (inputmessage.value === "" || inputmessage.value === null) {
        return;
      }
      const message = {
        username: state.username,
        content: inputmessage.value,
      };
      console.log(inputmessage.value);

      push(messagesRef, message);

      inputmessage.value = "";
    };
    onMounted(() => {
      const messagesRef = fbref(db, "messages");
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        let messages = [];
        Object.keys(data).forEach((key) => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content,
          });
        });
        state.messages = messages;
        console.log(messages);
      });
    });

    return {
      signin,
      logout,
      inputmessage,
      state,
      inputUsername,
      SendMessage,
    };
  },
};
</script>
<style lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 244, 27, 0.2705882353);
  margin: 0;
  padding-top: 15%;

  form {
    background-color: #fff;
    height: 300px;
    width: 40%;
    border-radius: 30px;
    margin: auto;
    padding: 20px;

    h1 {
      color: #848484;
      margin-top: 35px;
      margin-bottom: 40px;
    }

    input {
      width: 100%;
      border-radius: 7px;
      padding: 10px;
      outline: none;
      border: #b5c8ac solid 1px;
      color: #71707094;
    }

    label {
      color: #b5c8ac;
      margin-bottom: -2px;
    }

    button {
      margin-top: 20px;
      width: 100%;
      border-radius: 7px;
      padding: 7px;
      color: #fff;
      background: #bafcc1;
      border: none;
      font-weight: bolder;
      font-size: 17px;
    }
  }
  .view-chat {
    color: #fff;
    margin-top: -155px;

    span {
      float: right;
      cursor: pointer;
    }
    .chat-box {
      background-color: #fff;
      border-radius: 30px;
      height: 80vh;

      .message-box {
        float: right;
        padding: 30px;
        display: block;

        span {
          color: #dfdcdc;
          float: right;
          margin-right: 20px;
        }

        .message {
          color: #fff;
          background-color: #bafcc1;
          border-radius: 30px;
          padding: 12px;
          margin-top: 24px;
          display: block;
          margin-bottom: 15px;
        }
      }
      .message-box-anther {
        float: left;
        padding: 30px;
        justify-content: flex-end;

        span {
          color: #dfdcdc;
          float: left;
          margin-left: 20px;
        }

        .message {
          color: #737171;
          background-color: #eef2ee;
          border-radius: 30px;
          padding: 12px;
          margin-top: 24px;
        }
      }
    }
    footer {
      width: 100%;
      margin-top: -52px;

      form {
        background-color: #fff;
        width: 100%;
        border-top: rgba(168, 166, 166, 0.1019607843) solid 2px;
        border-radius: 0;
        height: 5%;

        .text {
          width: 80%;
          border-radius: 7px 0 0 7px;
          padding: 10px;
          outline: none;
          color: rgba(113, 112, 112, 0.5803921569);
          border: none;
          background-color: #eeeeee57;
        }

        .button {
          width: 20%;
          border-radius: 0 7px 7px 0;
          color: #fff;
          background-color: #bafcc1;
          border: none;
        }
      }
    }
  }
}
</style>
