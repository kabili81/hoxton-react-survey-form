type Props = {
  list: string[];
}

// Components don't need to be separeted into individual files
// These answers objects keys match the values attributes from the checkboxes
const answersSet = {
  colour: "It's yellow!",
  sound: "It squeaks!",
  logo: "It has a logo!",
  size: "Its big!"
};

const answersSetTwo = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }: Props) {
  return (
    <ul>
      {list.map((item) => (
        <li>
          {/* @ts-ignore */}
          {Object.keys(answersSet).includes(item) ? answersSet[item] : answersSetTwo[item]}
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;