AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/america.jpg",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/iron.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/thor.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/spiderman .jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl=this.createBorder(position,item.id)
      
      const thumbnailsEl=this.createThumbnail(item)
     
      borderEl.appendChild(thumbnailsEl)

      const titleEl=this.createTitle(position,item.id)
      borderEl.appendChild(titleEl)

      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder:function(position,id){

      const entityEl=document.createElement('a-entity')
      entityEl.setAttribute('id',id)
      entityEl.setAttribute('visible',true)
      entityEl.setAttribute('geometry',{
        primitive:'ring',
        radiusInner:9,
        radiusOuter:10,
      
        
      })
      entityEl.setAttribute('position',position)
      entityEl.setAttribute('material',{
        color:'red',
        opacity:1,
      })
      entityEl.setAttribute("cursor-listener", {});
     return entityEl


  },

  createThumbnail:function(item){
const entityEl=document.createElement('a-entity')
entityEl.setAttribute('visible',true)
entityEl.setAttribute('geometry',{
  primitive:'circle',
  radius:9
})
entityEl.setAttribute('material',{
  src:item.url
})
return entityEl
  },

  createTitle:function(position,id){
    const entityEl=document.createElement('a-entity')
    entityEl.setAttribute('text',{
      font:'exo2bold',
     align:'center',
     width:70,
     color:'yellow',
     value:id.title
    })
    
    const elPosition=position
    elPosition.y=-20
    entityEl.setAttribute('position',elPosition)
    entityEl.setAttribute('visible',true)

    return entityEl
  }



});
