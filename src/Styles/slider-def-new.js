/* Reset */
* {
    margin: 0;
    padding: 0;
  }
  
  /* Slider */
  #slider {
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
  }
  @keyframes load {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }
  .slides {
    width: 1200%;
    height: 100%;
    position: relative;
    -webkit-animation: slide 120s infinite ease-in-out;
    -moz-animation: slide 120s infinite ease-in-out;
    animation: slide 120s infinite ease-in-out;
    display: flex;
    flex-direction: row;
  }
  .slider {
    width: 25%;
    height: 100%;
    /* float: left; */
  
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  .slide img {
    width: 100%;
    height: 100%;
  }
  .slide img {
    width: 100%;
    height: 100%;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .image img {
    width: 100%;
    height: 100%;
  }
  
  /* Legend */
  .legend {
    border: 500px solid transparent;
    border-left: 800px solid rgba(52, 73, 94, 0.7);
    border-bottom: 0;
    position: absolute;
    bottom: 0;
  }
  
  /* Contents */
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
  .content-txt {
    width: 400px;
    height: 150px;
    float: left;
    position: relative;
    top: 300px;
  
    /* -webkit-animation: content-s 9s infinite; */
    /* -moz-animation: content-s 9s infinite; */
    /* animation: content-s 9s infinite; */
  }
  .content-txt h1 {
    font-family: Intro;
    font-size: 32px;
    color: #fff;
    text-align: left;
    margin-left: 30px;
    padding-bottom: 10px;
  }
  .content-txt h2 {
    font-family: Quicksand;
    font-weight: normal;
    font-size: 22px;
    font-style: italic;
    color: #fff;
    text-align: left;
    margin-left: 30px;
  }
  
  /* Switch */
  .switch {
    width: 180px;
    height: 10px;
    position: absolute;
    bottom: 50px;
    z-index: 99;
    left: 30px;
  }
  .switch > ul {
    list-style: none;
  }
  .switch > ul > li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #333;
    float: left;
    margin-right: 5px;
    cursor: pointer;
  }
  .switch ul {
    overflow: hidden;
  }
  .on {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #f39c12;
    position: relative;
    -webkit-animation: on 120s infinite;
    -moz-animation: on 120s infinite;
    animation: on 120s infinite;
  }
  
  /* Animation */
  @-webkit-keyframes slide {
    0%,
    100% {
      margin-left: 0%;
    }
    7% {
      margin-left: 0%;
    }
  
    8% {
      margin-left: -100%;
    }
  
    15% {
      margin-left: -100%;
    }
  
    16% {
      margin-left: -200%;
    }
  
    23% {
      margin-left: -200%;
    }
    24% {
      margin-left: -300%;
    }
    31% {
      margin-left: -300%;
    }
    32% {
      margin-left: -400%;
    }
  
    39% {
      margin-left: -400%;
    }
    40% {
      margin-left: -500%;
    }
    47% {
      margin-left: -500%;
    }
    48% {
      margin-left: -600%;
    }
    55% {
      margin-left: -600%;
    }
    56% {
      margin-left: -700%;
    }
    63% {
      margin-left: -700%;
    }
    64% {
      margin-left: -800%;
    }
    71% {
      margin-left: -800%;
    }
    72% {
      margin-left: -900%;
    }
    79% {
      margin-left: -900%;
    }
    80% {
      margin-left: -1000%;
    }
    87% {
      margin-left: -1000%;
    }
    88% {
      margin-left: -1100%;
    }
    95% {
      margin-left: -1100%;
    }
  
    96% {
      margin-left: -1200%;
    }
    99% {
      margin-left: -1200%;
    }
  }
  @-moz-keyframes slide {
    0%,
    100% {
      margin-left: 0%;
    }
    7% {
      margin-left: 0%;
    }
  
    8% {
      margin-left: -100%;
    }
  
    15% {
      margin-left: -100%;
    }
  
    16% {
      margin-left: -200%;
    }
  
    23% {
      margin-left: -200%;
    }
    24% {
      margin-left: -300%;
    }
    31% {
      margin-left: -300%;
    }
    32% {
      margin-left: -400%;
    }
  
    39% {
      margin-left: -400%;
    }
    40% {
      margin-left: -500%;
    }
    47% {
      margin-left: -500%;
    }
    48% {
      margin-left: -600%;
    }
    55% {
      margin-left: -600%;
    }
    56% {
      margin-left: -700%;
    }
    63% {
      margin-left: -700%;
    }
    64% {
      margin-left: -800%;
    }
    77% {
      margin-left: -800%;
    }
    78% {
      margin-left: -900%;
    }
    80% {
      margin-left: -900%;
    }
    81% {
      margin-left: -1000%;
    }
    88% {
      margin-left: -1000%;
    }
    89% {
      margin-left: -1100%;
    }
    96% {
      margin-left: -1100%;
    }
  
    97% {
      margin-left: -1200%;
    }
    99% {
      margin-left: -1200%;
    }
  }
  @keyframes slide {
    0%,
    100% {
      margin-left: 0%;
    }
    7% {
      margin-left: 0%;
    }
  
    8% {
      margin-left: -100%;
    }
  
    14% {
      margin-left: -100%;
    }
  
    15% {
      margin-left: -200%;
    }
  
    22% {
      margin-left: -200%;
    }
    23% {
      margin-left: -300%;
    }
    30% {
      margin-left: -300%;
    }
    31% {
      margin-left: -400%;
    }
  
    38% {
      margin-left: -400%;
    }
    39% {
      margin-left: -500%;
    }
    46% {
      margin-left: -500%;
    }
    47% {
      margin-left: -600%;
    }
    54% {
      margin-left: -600%;
    }
    55% {
      margin-left: -700%;
    }
    62% {
      margin-left: -700%;
    }
    63% {
      margin-left: -800%;
    }
    70% {
      margin-left: -800%;
    }
    71% {
      margin-left: -900%;
    }
    78% {
      margin-left: -900%;
    }
    79% {
      margin-left: -1000%;
    }
    86% {
      margin-left: -1000%;
    }
    87% {
      margin-left: -1100%;
    }
    94% {
      margin-left: -1100%;
    }
  
    95% {
      margin-left: -1200%;
    }
    99% {
      margin-left: -1200%;
    }
  }
  
  @-webkit-keyframes content-sZ {
    0% {
      left: -420px;
    }
    10% {
      left: 0px;
    }
    30% {
      left: 0px;
    }
    40% {
      left: 0px;
    }
    50% {
      left: 0px;
    }
    60% {
      left: 0px;
    }
    70% {
      left: 0;
    }
    80% {
      left: -420px;
    }
    90% {
      left: -420px;
    }
    100% {
      left: -420px;
    }
  }
  @-moz-keyframes content-sZ {
    0% {
      left: -420px;
    }
    10% {
      left: 0px;
    }
    30% {
      left: 0px;
    }
    40% {
      left: 0px;
    }
    50% {
      left: 0px;
    }
    60% {
      left: 0px;
    }
    70% {
      left: 0;
    }
    80% {
      left: -420px;
    }
    90% {
      left: -420px;
    }
    100% {
      left: -420px;
    }
  }
  @keyframes content-s {
    0% {
      left: 0px;
    }
    5% {
      left: -420px;
    }
    15% {
      left: -420px;
    }
    30% {
      left: 0px;
    }
    40% {
      left: 0px;
    }
    50% {
      left: 0px;
    }
    60% {
      left: 0px;
    }
    70% {
      left: 0px;
    }
    80% {
      left: 0px;
    }
    85% {
      left: 0px;
    }
    90% {
      left: 0px;
    }
    95% {
      left: 0px;
    }
    100% {
      left: 0px;
    }
  }
  
  @-webkit-keyframes on {
    0%,
    100% {
      margin-left: 0%;
    }
    7% {
      margin-left: 0px;
    }
    8% {
      margin-left: 15px;
    }
    15% {
      margin-left: 15px;
    }
    16% {
      margin-left: 30px;
    }
    23% {
      margin-left: 30px;
    }
    24% {
      margin-left: 45px;
    }
    31% {
      margin-left: 45px;
    }
    32% {
      margin-left: 60px;
    }
    39% {
      margin-left: 60px;
    }
    40% {
      margin-left: 75px;
    }
    47% {
      margin-left: 75px;
    }
    48% {
      margin-left: 90px;
    }
    55% {
      margin-left: 90px;
    }
    56% {
      margin-left: 105px;
    }
    63% {
      margin-left: 105px;
    }
    64% {
      margin-left: 120px;
    }
    71% {
      margin-left: 120px;
    }
    72% {
      margin-left: 135px;
    }
    79% {
      margin-left: 135px;
    }
    80% {
      margin-left: 150px;
    }
    87% {
      margin-left: 150px;
    }
    88% {
      margin-left: 165px;
    }
    95% {
      margin-left: 165px;
    }
    96% {
      margin-left: 180px;
    }
  }
  
  @-moz-keyframes on {
    0%,
    100% {
      margin-left: 0%;
    }
    7% {
      margin-left: 0px;
    }
    8% {
      margin-left: 15px;
    }
    15% {
      margin-left: 15px;
    }
    16% {
      margin-left: 30px;
    }
    23% {
      margin-left: 30px;
    }
    24% {
      margin-left: 45px;
    }
    31% {
      margin-left: 45px;
    }
    32% {
      margin-left: 60px;
    }
    39% {
      margin-left: 60px;
    }
    40% {
      margin-left: 75px;
    }
    47% {
      margin-left: 75px;
    }
    48% {
      margin-left: 90px;
    }
    55% {
      margin-left: 90px;
    }
    56% {
      margin-left: 105px;
    }
    63% {
      margin-left: 105px;
    }
    64% {
      margin-left: 120px;
    }
    71% {
      margin-left: 120px;
    }
    72% {
      margin-left: 135px;
    }
    79% {
      margin-left: 135px;
    }
    80% {
      margin-left: 150px;
    }
    87% {
      margin-left: 150px;
    }
    88% {
      margin-left: 165px;
    }
    95% {
      margin-left: 165px;
    }
    96% {
      margin-left: 180px;
    }
  }
  
  @keyframes on {
    0%,
    100% {
      margin-left: 0%;
    }
    7% {
      margin-left: 0px;
    }
    8% {
      margin-left: 15px;
    }
    15% {
      margin-left: 15px;
    }
    16% {
      margin-left: 30px;
    }
    23% {
      margin-left: 30px;
    }
    24% {
      margin-left: 45px;
    }
    31% {
      margin-left: 45px;
    }
    32% {
      margin-left: 60px;
    }
    39% {
      margin-left: 60px;
    }
    40% {
      margin-left: 75px;
    }
    47% {
      margin-left: 75px;
    }
    48% {
      margin-left: 90px;
    }
    55% {
      margin-left: 90px;
    }
    56% {
      margin-left: 105px;
    }
    63% {
      margin-left: 105px;
    }
    64% {
      margin-left: 120px;
    }
    71% {
      margin-left: 120px;
    }
    72% {
      margin-left: 135px;
    }
    79% {
      margin-left: 135px;
    }
    80% {
      margin-left: 150px;
    }
    87% {
      margin-left: 150px;
    }
    88% {
      margin-left: 165px;
    }
    95% {
      margin-left: 165px;
    }
    96% {
      margin-left: 180px;
    }
  }
  