import { dataMachine } from "./dataMachine";
import { httpClient } from "../utils/asyncUtils";
import { isEmpty, omit } from "lodash/fp";

export const eventMachine = dataMachine("events").withConfig({
    services: {
        fetchData: async (ctx, event: any) => {
            const payload = omit("type", event);
            const resp = await httpClient.get(`http://localhost:3001/events/filtered`, {
                params: !isEmpty(payload) ? payload : undefined,
            });
            console.log(resp.data);

            return resp.data;
        },
    },
});
