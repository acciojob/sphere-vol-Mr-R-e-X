function volume_sphere(event) {
  //Write your code here
  event.preventDefault();
  let radius = parseFloat(document.querySelector("#radius").value);
  let volume = document.querySelector("#volume");
  if (radius >= 0) {
    let vol = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume.value = vol.toFixed(4);
  }
}

window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
