var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.onprogress = () => {
  console.log("on progressing");
};

xhr.open("GET", "msg.txt", true);
xhr.send();

console.log("hello");

/*
    readyState => 
0: request is not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

    status =>
200: "OK"
403: "Forbidden"
404: "Not Found"
*/
