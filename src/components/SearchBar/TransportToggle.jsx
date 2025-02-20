/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import WalkIcon from "../../icons/walk-white.svg";
import BusIcon from "../../icons/bus-icon.svg";
import { mockWalkingRoute } from "../../mocks/mockWalkingRoute";
import { mockPTRoute } from "../../mocks/mockPTRoute";

const TransportToggle = ({ selectedTransport, onTransportChange }) => {
  const transportOptions = {
    walk: { label: "도보", icon: WalkIcon, time: mockWalkingRoute.duration },
    bus: { label: "대중교통", icon: BusIcon, time: mockPTRoute.duration },
  };

  return (
    <ToggleContainer>
      {Object.entries(transportOptions).map(([key, { label, icon, time }]) => (
        <ToggleButton
          key={key}
          active={selectedTransport === key}
          onClick={() => onTransportChange(key)}
        >
          {selectedTransport === key ? (
            <>
              <img src={icon} alt={label} width="20" />
              {time}
            </>
          ) : (
            label
          )}
        </ToggleButton>
      ))}
    </ToggleContainer>
  );
};


const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 358px;
  height: 44px;
  padding: 2px;
  margin-top: 4px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const ToggleButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#ff2655" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#444444")};

  img {
    margin-right: 10px;
  }
`;

export default TransportToggle;