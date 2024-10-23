export default function Item(props) {
    return (
      <main>
        <ul>
          <li>
            <section>
              <h1 classname="text-4xl font-bold m-8">{props.name}</h1>
              <p>
                Buy {props.quantity} in {props.category}
              </p>
            </section>
          </li>
        </ul>
      </main>
    );
  }