module.exports = {
  someSidebar: {
    Installation: [
      "installation/raspberry-pi",
      "installation/docker",
      "installation/macos-windows",
      "installation/freebox-delta",
    ],
    Intégrations: [
      "integrations/openweather",
      "integrations/caldav",
      "integrations/camera",
      "integrations/xiaomi",
      "integrations/sonoff",
      "integrations/tasmota",
      "integrations/tp-link",
      "integrations/philips-hue",
      "integrations/mqtt",
      "integrations/owntracks",
      "integrations/zwave",
      "integrations/telegram",
    ],
    Scènes: [
      "scenes/intro",
      "scenes/device-state-changed-trigger",
      "scenes/scheduled-trigger",
      "scenes/turn-on-off-the-switches-action",
      "scenes/get-last-device-state-action",
      "scenes/wait-action",
      "scenes/continue-only-if-action",
      "scenes/send-a-message-action",
      "scenes/turn-on-off-the-lights-action",
      "scenes/http-request",
      "scenes/user-presence",
    ],
    "Tableau de bord": [
      "dashboard/intro",
      "dashboard/weather",
      "dashboard/temperature-in-room",
      "dashboard/camera",
      "dashboard/devices-in-room",
    ],
    API: ["api/architecture", "api/data-model", "api/rest-api", "api/mqtt-api"],
    Développement: [
      "dev/setup-development-environment-mac-linux",
      "dev/setup-development-environment-windows",
      "dev/developing-a-service",
    ],
  },
};
