import serverPayload from "../../mocks/server-payload.json";
import { QuestionManager } from "./question-manager";

const questionManager = new QuestionManager(serverPayload);

export default questionManager;
