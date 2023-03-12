$primary-color: #3498db;
$secondary-color: #f1c40f;

body {
  background-color: #34495e;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
}

.card {
  width: 150px;
  height: 150px;
  margin: 10px;
  perspective: 500px;
  cursor: pointer;
  
  &.flipped {
    transform: rotateY(180deg);
  }
  
  &.matched {
    background-color: $secondary-color;
    pointer-events: none;
  }
  
  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #fff;
    backface-visibility: hidden;
    transition: transform 0.6s ease;
  }
  
  .front {
    background-color: $primary-color;
    transform: rotateY(0deg);
  }
  
  .back {
    background-color: $secondary-color;
    transform: rotateY(180deg);
  }
}

.scoreboard {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  
  div {
    margin: 0 50px;
    display: flex;
    align-items: center;
    font-size: 40px;
    color: #fff;
    
    &.active {
      font-weight: bold;
    }
    
    span {
      margin-left: 20px;
    }
  }
}

.reset-btn {
  display: block;
  margin: 50px auto;
  padding: 10px 20px;
  font-size: 30px;
  color: #fff;
  background-color: $primary-color;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}