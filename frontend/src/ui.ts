import { axiosInstance } from "./service";
import { AxiosError, AxiosResponse } from "axios";

export class Ui {
  private $input = document.querySelector("#targetInput");
  private $button = document.querySelector("#targetBtn");
  private $responseList = document.querySelector("#responseList");
  private $clearBtn = document.querySelector("#clearBtn");

  constructor() {}

  public getInputText() {
    //@ts-expect-error
    return this.$input?.value;
  }

  private addResponseToList(value: { data: string; status: string }) {
    const { data, status } = value;

    const newLi = document.createElement("li");
    const dataDiv = document.createElement("div");
    const statusDiv = document.createElement("div");

    statusDiv.appendChild(document.createTextNode(`status: ${status}`));
    dataDiv.appendChild(document.createTextNode(`data: ${data}`));

    newLi.appendChild(dataDiv);
    newLi.appendChild(statusDiv);

    // @ts-ignore
    this.$responseList.appendChild(newLi);
  }

  private showUiSuccessResponse(res: AxiosResponse) {
    this.addResponseToList({
      data: JSON.stringify(res.data),
      status: res.status.toString(),
    });
  }

  private showUiErrorResponse(err: AxiosError) {
    this.addResponseToList({
      // @ts-ignore
      data: JSON.stringify(err.response.data),
      // @ts-ignore
      status: err.response.status.toString(),
    });
  }

  public addClickCallToBtn() {
    // const test = "test";

    // @ts-expect-error
    this.$button.addEventListener("click", () => {
      axiosInstance
        .get("test", {
          headers: {
            authorization: this.getInputText(),
          },
        })
        .then((res: AxiosResponse) => {
          this.showUiSuccessResponse(res);
        })
        .catch((err: AxiosError) => {
          this.showUiErrorResponse(err);
        });
    });

    // // @ts-ignore
    // this.$button.addEventListener("click", () => {
    //   axiosInstance
    //     .post("token", {
    //       refreshToken: refreshTokenMock,
    //     })
    //     .then((res) => {
    //       console.log("res: ", res);
    //       this.showUiSuccessResponse(res);
    //     })
    //     .catch((err) => {
    //       console.log("err: ", err);
    //       this.showUiErrorResponse(err);
    //     });
    // });
  }

  public addClickClearToBtn() {
    // @ts-ignore
    this.$clearBtn.addEventListener("click", () => {
      // @ts-ignore
      this.$responseList.innerHTML = "";
    });
  }
}
