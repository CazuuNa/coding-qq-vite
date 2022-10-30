
import { ElMessage } from "element-plus";
export const clickMessage = () => {
  ElMessage({
    message: "开发中，敬请期待！",
    type: "warning",
    showClose: true,
  });
}

export default clickMessage