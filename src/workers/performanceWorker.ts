// performanceWorker.ts

// กำหนด interface สำหรับข้อมูลที่รับเข้ามา
interface LayoutData {
  width: number;
  height: number;
  isSidebarOpen: boolean;
}

interface WorkerMessage {
  type: 'COMPUTE_LAYOUT' | 'PROCESS_DATA';
  data: LayoutData | any;
}

self.onmessage = (e: MessageEvent<WorkerMessage>) => {
  const { type, data } = e.data;

  switch (type) {
    case 'COMPUTE_LAYOUT':
      const layoutResult = computeLayout(data as LayoutData);
      self.postMessage({ type: 'LAYOUT_RESULT', data: layoutResult });
      break;

    case 'PROCESS_DATA':
      const processedData = processData(data);
      self.postMessage({ type: 'DATA_RESULT', data: processedData });
      break;

    default:
      self.postMessage({ type: 'ERROR', data: 'Unknown message type' });
  }
};

function computeLayout(data: LayoutData) {
  // ตัวอย่างการคำนวณ layout
  const sidebarWidth = data.isSidebarOpen ? 256 : 0; // ความกว้าง sidebar = 256px ถ้าเปิด
  const contentWidth = data.width - sidebarWidth;

  return {
    width: data.width,
    height: data.height,
    sidebarWidth,
    contentWidth,
    isSidebarOpen: data.isSidebarOpen,
  };
}

function processData(data: any) {
  // ตัวอย่างการประมวลผลข้อมูล
  // เช่น ถ้า data เป็น array ก็อาจจะ filter หรือ map ได้
  return data;
};