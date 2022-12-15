
        function multiply() {
            var n = document.getElementById('num').value;
            var l = document.getElementById('limit').value;
            var out = "";
            for (var i = 1; i <= 10; i++) {
                out = out + i + " * " + n + " = " + i * n + "<br/>";
            }
            document.getElementById("result").innerHTML = out;
        }
        function myFunction() {
            location.reload();
        }
        function reset() {
            document.getElementById("myForm").reset();
        }
   