<template>
  <div class="main">
    <div class="container">
      <div class="info-box">
        <form action="">
          <h1>log in to chat</h1>
          <label for="Username">Username</label>
          <input
            type="text"
            name=""
            id="Username"
            placeholder="please enter your Username"
          />
          <button type="button">Log in</button>
        </form>
      </div>
      <div class="view-chat">
        <span>logout</span>
        <h1>Hello, name</h1>
        <div class="chat-box">
          <div class="message-box">
            <span>name</span>
            <div class="message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <footer>
          <form action="">
            <input type="text" class="text" placeholder="Enter your message" />
            <input type="button" class="button" value="send" />
          </form>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// import db from "./db";
</script>
<style lang="scss">
.main {
  width: 100%;
  height: 300vh;
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

    span {
      float: right;
    }
    .chat-box {
      background-color: #fff;
      border-radius: 30px;
      height: 80vh;

      .message-box {
        float: right;
        padding: 30px;

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
