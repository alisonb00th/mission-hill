/*

Template for Waypoint trigger:

var WAYPOINT = new Waypoint({
  element: document.querySelector(SELECTION),
  handler: function(direction) {
    if(direction === "down") {

      <-- ACTION GOES HERE FOR DOWNWARD SCROLLING-->

    } else if(direction === "up") {

      <-- ACTION GOES HERE FOR UPWARD SCROLLING -->

    }
  }
});

*/
d3.csv("data/mh100-data.csv").then(function(data) {
var scatterplot = new Waypoint({
  element: document.querySelector("#generations"),
  handler: function(direction) {
    if(direction === "down") {
      for(i=0; i<d.length; i++){
        if(yearsInMH>10) {
          svg.selectAll("circle")
            attr.("fill", "#ffff99")
      };
    };
  } else if(direction === "up") {
      svg.selectAll("circle")
        attr.("fill", "none")
    }

  }

});
}
