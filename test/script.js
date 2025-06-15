document.getElementById("styleSwitcher").addEventListener("click", function() {
  const mainStyle = document.getElementById("mainStyle");
  const altStyle = document.getElementById("altStyle");

  if (mainStyle.disabled) {
    mainStyle.disabled = false;
    altStyle.disabled = true;
  } else {
    mainStyle.disabled = true;
    altStyle.disabled = false;
  }
});