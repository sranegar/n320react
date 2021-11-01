import React, { useState, useEffect } from "react";
import InventoryItem from "./InventoryItem";
import { List, Modal, Grid } from "@material-ui/core";
import "./inventory.css";
import Bag from "./Bag.js";

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [selectedItem, selectItem] = useState({});
  const [showModal, setModalOpen] = useState(false);
  const [bagItems, setBagItems] = useState([]);

  useEffect(() => {
    //on component mount, load data
    fetch("data/items.json")
      .then((result) => result.json())
      .then((data) => {
        setItems(data);
        //store data
      });
  }, []);

  //create our inventory list
  const itemsList = items.map((item) => (
    <InventoryItem
      key={item.id}
      item={item}
      addItem={addItem}
      showInfo={showInfo}
    />
  ));

  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div id="infoBox">
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.desc}</p>
          <p>Weight: {selectedItem.weight}</p>
        </div>
      </Modal>
      <Grid container>
        <Grid>
          <h2>Items</h2>
          <List>{itemsList}</List>
        </Grid>
        <Grid>
          <h2>Bag</h2>
          <Bag items={bagItems} removeItem={removeItem} />
        </Grid>
      </Grid>
    </div>
  );

  function removeItem(itemInd) {
    //create copy of bag items
    const tempBag = [...bagItems];
    //remove from the copied array item at index
    tempBag.splice(itemInd, 1);
    //set that as our new array
    setBagItems(tempBag);
  }

  function showInfo(itemId) {
    //select the item to be shown -> put its information into a variable
    selectItem(items[itemId]);
    //show the info
    setModalOpen(true);
  }

  function addItem(itemId) {
    setBagItems([...bagItems, items[itemId]]);
  }
}
