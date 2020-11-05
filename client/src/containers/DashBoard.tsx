import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import Map from '../components/Final/Maps'
import GraphByDay from '../components/Final/GraphByDay'
import GraphByHour from '../components/Final/GraphByHour'
import Retention from '../components/Final/Retention'

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <div >
      <Map />
      <GraphByDay />
      <GraphByHour />
      <Retention />
    </div>
  );
};

export default DashBoard;
