use axum::{
    routing::get,
    Router,
};


#[tokio::main]
async fn main() {
    let app = Router::new()
                .route("/", get(|| async { "Hello, World!" }));

    let listener = tokio::net::TcpListener::bind("0.0.0.0:8800").await.unwrap();

    println!("started on PORT 8800");
    axum::serve(listener, app).await.unwrap();
}
