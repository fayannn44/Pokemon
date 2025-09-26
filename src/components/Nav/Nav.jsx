import foto from "../../assets/pokemon.png";
const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff", 
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000, 
      }}
    >
      <img
        src={foto}
        alt="Logo"
        style={{ height: "100px" }}
      />
    </nav>
  );
};

export default Navbar;
