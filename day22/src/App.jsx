// Dec 01, 2024
// Day 22: Learn about props and passing data to components.

import Card from "./componebts/Card";
const App = () => {
  return (
    <div className="all_cards">
      <Card
        img="https://picsum.photos/272/200"
        heading="Heading1"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />
      <Card
        img="https://picsum.photos/272/200"
        heading="Heading2"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />
      <Card
        img="https://picsum.photos/272/200"
        heading="Heading3"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />

      <Card
        img="https://picsum.photos/272/200"
        heading="Heading4"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />

      <Card
        img="https://picsum.photos/272/200"
        heading="Heading5"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />

      <Card
        img="https://picsum.photos/272/200"
        heading="Heading6"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />

      <Card
        img="https://picsum.photos/272/200"
        heading="Heading7"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, nihil."
      />
    </div>
  );
};

export default App;
