export const mapData = {
  camp: ["lake", "forest", "plains", "desert"],
  forest: ["camp", "river"],
  lake: ["camp", "river"],
  river: ["forest","lake", "beach"],
  beach: ["river"],
  plains: ["camp", "cliffs"],
  desert: ["camp", "cliffs"],
  cliffs: ["plains", "desert", "caves"],
  caves: ["cliffs"],
};