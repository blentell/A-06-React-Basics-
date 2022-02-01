import React from 'react';

function Header() {
  return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				height: "50px",
				backgroundColor: "red",
				marginBottom: "30px",
			}}
		>
			<div style={{ marginLeft: "20px", alignSelf: "center" }}>LOGO</div>
			<div style={{ marginRight: "20px", alignSelf: "center" }}>menu</div>
		</div>
	);
}

export default Header;



