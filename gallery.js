/* global d3 */

let desmostylia = [
{src: "https://upload.wikimedia.org/wikipedia/commons/8/80/Ashoroa.jpg", species: "Ashoroa laticosta", bones: "a rib, a humerus, a femur, and three vertebrae"},
{src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Behemotops.jpg", species: "Behemotops" },
{src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Paleoparadoxia_skeletal_diagram.jpg", species: "Paleoparadoxia"},
{src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Desmostylus_skeletal_diagram.jpg", species: "Desmostylus"}
]

let sel = d3.select("#gallery")
.selectAll("div")
.data(desmostylia)
.join("div")

sel.append("img").attr("src", d => d.src)
sel.append("p").text(d => d.species)