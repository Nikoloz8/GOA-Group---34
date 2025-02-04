let list = [
    { subject: "Travel", content: "Pack bags!", receivedDate: "2024-12-02" },
    { subject: "Work", content: "Meeting Friday.", receivedDate: "2024-12-05" },
    { subject: "Offer", content: "30% off now!", receivedDate: "2024-12-10" },
    { subject: "Sports", content: "Final on Sunday!", receivedDate: "2024-12-12" },
    { subject: "Tech", content: "AI is booming.", receivedDate: "2024-12-15" },
    { subject: "Health", content: "Try yoga!", receivedDate: "2024-12-18" },
    { subject: "Programming", content: "JS is fun!", receivedDate: "2024-12-20" }
]

for (let i = 0; i < list.length; i++) {
    for (let key in list[i]) {
        console.log(`${key}: ${list[i][key]}`)
    }
}