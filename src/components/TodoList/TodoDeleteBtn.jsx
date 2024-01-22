import { Trash2 } from "lucide-react";

export default function TodoDeleteBtn({ id, onDelete }) {
  return (
    <div>
      <button
        className="btn btn-square"
        onClick={() => document.getElementById("delete-modal").showModal()}
      >
        <Trash2 />
      </button>
      <dialog id="delete-modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Xoá task</h3>
          <p className="py-4">
            Bạn có thực sự muốn xoá task này không? Việc này sẽ không hoàn tác
            lại được
          </p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={() => onDelete(id)}>
              Vâng, tôi muốn xoá
            </button>
            <form method="dialog">
              <button className="btn">Huỷ bỏ</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
