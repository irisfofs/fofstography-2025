/**
 *
 * @param {Array<string>} itemsToHide
 * Takes a list of item ids and hides them from EMI.
 */
function emiHideItems(itemsToHide) {
  console.info("Hiding items from EMI...");

  // == Hide low-level enchants and modified potions

  let obj = {
    removed: [],
  };

  itemsToHide.forEach((i) => {
    obj.removed.push(`item:${i}`);
  });

  JsonIO.write(
    "kubejs/assets/emi/index/stacks/dyed_refined_storage_blocks.json",
    obj
  );
}

const dyes = [
  "white",
  "light_gray",
  "gray",
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "light_blue",
  "blue",
  "purple",
  "magenta",
  "pink",
];
const blocks = [
  "controller",
  "creative_controller",
  "grid",
  "crafting_grid",
  "pattern_grid",
  "fluid_grid",
  "network_receiver",
  "network_transmitter",
  "relay",
  "detector",
  "security_manager",
  "wireless_transmitter",
  "disk_manipulator",
  "crafter",
  "crafter_manager",
  "crafting_monitor",
];
const dyedRefinedStorageBlocks = [];
for (const color of dyes) {
  for (const block of blocks) {
    dyedRefinedStorageBlocks.push(`refinedstorage:${color}_${block}`);
  }
}

emiHideItems(dyedRefinedStorageBlocks);
