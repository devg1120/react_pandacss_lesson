import React, { useRef } from 'react';

export default function App() {
  // スクロール先のセクションの参照を保持
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // スクロールを実行する関数
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* サイドバー */}
      <nav style={{ position: 'fixed', width: '200px', padding: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <button onClick={() => scrollToSection(section1Ref)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue' }}>
              セクション 1
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(section2Ref)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue' }}>
              セクション 2
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(section3Ref)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue' }}>
              セクション 3
            </button>
          </li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main style={{ marginLeft: '220px', padding: '20px', width: '100%' }}>
        <section ref={section1Ref} style={{ height: '100vh', background: '#f0f0f0' }}>
          <h2>セクション 1 の内容</h2>
        </section>
        <section ref={section2Ref} style={{ height: '100vh', background: '#e0e0e0' }}>
          <h2>セクション 2 の内容</h2>
        </section>
        <section ref={section3Ref} style={{ height: '100vh', background: '#d0d0d0' }}>
          <h2>セクション 3 の内容</h2>
        </section>
      </main>
    </div>
  );
}

