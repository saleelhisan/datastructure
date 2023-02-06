function Reverse(str)
      {
        var revString = "";

        for (var i = str.length - 1; i >= 0; i--)
        {
          revString = revString + str[i]
        }

        return revString;
      }

      
      var str = "hello";
      console.log(Reverse(str));