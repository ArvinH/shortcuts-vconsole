module.exports = () => {
  const script = document.createElement('script');
  script.src = "https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js";
  document.getElementsByTagName('head')[0].appendChild(script);

  setTimeout(() => {
    // hacky way to wait for script load
    const script2 = document.createElement('script');
    script2.text = 'window.vConsole = new VConsole();';
    document.body.appendChild(script2);
  }, 1000);
  completion();
};