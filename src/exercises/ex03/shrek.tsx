import shrek from "./shrek.mp4";

export const ShrekMovie = () => {
  return (
    <div>
      <video controls>
        <source src={shrek} type="video/mp4" />
      </video>
      <div>Enjoy Shrek !</div>
    </div>
  );
};
