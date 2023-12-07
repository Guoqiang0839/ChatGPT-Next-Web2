#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

#[tauri::command]
fn generate_note(chat_history: String) -> String {
    // 这里应该是生成笔记的逻辑
    // 现在我们只是简单地返回聊天历史
    format!("生成的笔记: {}", chat_history)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .invoke_handler(tauri::generate_handler![generate_note])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

