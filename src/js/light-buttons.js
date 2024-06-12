function initLightButtons()
{
  { //- kd: front leds
    const lightFrontLeftBtn = document.getElementById("light-front-left-btn");
    lightFrontLeftBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-light-front-left");
    });

    const lightFrontRightBtn = document.getElementById("light-front-right-btn");
    lightFrontRightBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-light-front-right");
    });
  }

  { //Rücklicht und Frontlicht
    const lightBackLeftBtn = document.getElementById("light-back-left-btn");
    lightBackLeftBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-light-back-left");
    });

    const lightBackRightBtn = document.getElementById("light-back-right-btn");
    lightBackRightBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-light-back-right");
    });
  }

  { //Blinker Rechts und Links
    const lightAlertLeftBtn = document.getElementById("light-alert-left-btn");
    lightAlertLeftBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-light-alert-left");
    });

    const lightAlertRightBtn = document.getElementById("light-alert-right-btn");
    lightAlertRightBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-light-alert-right");
    });
  }

  { //Autonomesfahren und Warnblinker
    const autoDriveBtn = document.getElementById("auto-drive-btn");
    autoDriveBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "toggle-self-driving");
    });
    const lightAlertWarningBtn = document.getElementById("light-alert-warning-btn");
    lightAlertWarningBtn.addEventListener("click", async () => {
      await post(ESP32_URL + "light-alert-warning-btn");
    });
  }
}
