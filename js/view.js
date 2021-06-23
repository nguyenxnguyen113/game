const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("form-register");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        controller.register(registerInfo);
      });
      const switchScreen = document.getElementById("redirect-to-login");
      switchScreen.addEventListener("click", (e) => {
        e.preventDefault();
        view.setActiveScreen("loginScreen");
      });

      break;
    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;
      const switchScreen1 = document.getElementById("redirect-to-register");
      switchScreen1.addEventListener("click", (e) => {
        e.preventDefault();
        view.setActiveScreen("registerScreen");
      });

      const loginForm = document.getElementById("form-login");
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(loginInfo);
      });

      break;
    case "menuScreen":
      document.getElementById("app").innerHTML = components.menuScreen;

      const addRoom = document.getElementById("add-room");
      addRoom.addEventListener("click", (e) => {
        e.preventDefault();
        model.createNewGame({ name: model.listRoom.length + 1 });
      });
      model.listenRoomChange();
      const exit = document.getElementById("exit");
      exit.addEventListener("click", (e) => {
        e.preventDefault();
        view.setActiveScreen("loginScreen");
      });
      // const switchScreen2 = document.getElementById('go-to-room')
      // switchScreen2.addEventListener('click',(e)=>{

      //     view.setActiveScreen('gameScreen')
      // })

      break;
    case "gameScreen":
      document.getElementById("app").innerHTML = components.gameScreen;
      const deleteRoom = document.getElementById("divcontrol");
      deleteRoom.addEventListener("submit", (e) => {
        e.preventDefault();
        //    firebase.firestore().collection(model.collectionName).doc(model.currentRoom.id).delete()

        view.setActiveScreen("menuScreen");
      });
  }
};
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};

view.createNewGame = (room) => {
  const gameWrapper = document.createElement("div");
  gameWrapper.classList.add("room");
  gameWrapper.innerHTML = `
    <button class="button" id="go-to-room" type="submit">GO TO ROOM ${model.listRoom.length}</button>
    `;
  gameWrapper.addEventListener("click", () => {
    console.log(room);
    model.currentRoom = room;
    view.setActiveScreen("gameScreen");
    model.addUser(model.currentUser.email);
    model.listenGameChange(room.id);
  });
  document.querySelector(".room-list").appendChild(gameWrapper);
};
// view.addlocation=(location)=>{
//     EvenFile.Click=(id)=>{
//         l_played.push(Location.pos);
//     };
// }
view.showCurrentConversation = () => {
  for (let onelocation of model.currentConversation.locations) {
    view.addlocation(onelocation);
    console.log(onelocation);
  }
};
