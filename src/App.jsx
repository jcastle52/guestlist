import { useState } from "react";
import GetGuests from "./hooks/GetGuests";

export default function App() {
  const apiUrl =
    "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-FTB-CT-WEB-PT/guests";
  const { guests, loading, error } = GetGuests(apiUrl);
  const [guest, setGuest] = useState();

  if (guest) {
    return (
      <>
        <h1>{guest.name}</h1>
        <div>
          <h2>About</h2>
          <p>{guest.job}</p>
          <p>{guest.bio}</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>{guest.email}</p>
          <p>{guest.phone}</p>
        </div>
        <button
          onClick={() => {
            setGuest(undefined);
          }}
        >
          Back
        </button>
      </>
    );
  }
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <main>
        <h1>Guest List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((element) => (
              <tr
                key={element.id}
                onClick={() => {
                  setGuest(element);
                }}
              >
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
