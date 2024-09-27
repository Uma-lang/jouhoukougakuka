const questions = {
  "networking": [{
      "id": "QN.1.1",
      "category": "コンピューターネットワーク",
      "question": "現在のコンピュータネットワークは何システムか？",
      "model_answer": "現在のコンピュータネットワークは、パケット交換システムを基盤としている。このシステムでは、データがパケットと呼ばれる小さな単位に分割され、ネットワークを介して送信される。"
    },
    {
      "id": "QN.1.2",
      "category": "コンピューターネットワーク",
      "question": "ノード間で伝送される信号はアナログ？デジタル？",
      "model_answer": "基本的には、ノード間で伝送される信号はデジタル信号である。ただし、物理層での伝送中に、デジタル信号がアナログ信号として扱われる場合もある。"
    },
    {
      "id": "QN.1.3",
      "category": "コンピューターネットワーク",
      "question": "プロトコルとはなにか",
      "model_answer": "プロトコルとは、ネットワーク上でデータ通信を行う際の規約や手順を定義したものである。データの形式や伝送手順、エラーチェックなどが含まれ、通信相手同士が適切にデータを送受信できるようにする。"
    },
    {
      "id": "QN.1.4",
      "category": "コンピューターネットワーク",
      "question": "プロトコルが階層化している理由をのべよ",
      "model_answer": "プロトコルが階層化されている理由は次の通りである： 1. 互換性の確保: 異なるベンダーの機器やシステムでも互いに通信ができるようにする。 2. 分担と効率化: 各階層ごとに役割を分担することで、全体の複雑さを軽減し、効率的な通信が可能になる。 3. 拡張性: 階層ごとにプロトコルを変更することができ、新しい技術を容易に導入できる。"
    },
    {
      "id": "QN.1.5",
      "category": "コンピューターネットワーク",
      "question": "コンピュータネットワーク用のプロトコルが達成するべき課題を述べよ",
      "model_answer": "1. 信頼性の確保: データが正確に、順序通りに届けられること。 2. エラーチェック: データ転送中のエラーを検出し、再送が必要かどうかを判断する。 3. フロー制御: 送信速度を受信側の処理能力に合わせて調整し、データ損失を防ぐ。 4. セキュリティ: 通信内容が不正にアクセスされたり改ざんされたりしないように保護する。 5. 相互運用性の確保: 異なるネットワーク環境やプロトコルを使うシステム間でも通信を確実に行う。"
    },
    {
      "id": "QN.1.6",
      "category": "コンピューターネットワーク",
      "question": "OSI階層の各層名とそのサービスを書け",
      "model_answer": "OSI参照モデルの各階層とそのサービスは次の通りである： 1. 物理層: ビットの電気信号や光信号への変換と伝送。 2. データリンク層: 隣接ノード間でのフレーム転送、エラーチェック、再送。 3. ネットワーク層: 異なるネットワーク間でのルーティング、IPアドレッシング。 4. トランスポート層: エンドツーエンドの信頼性のあるデータ転送、フロー制御（TCP/UDP）。 5. セッション層: 通信セッションの確立、管理、終了。 6. プレゼンテーション層: データ形式の変換（暗号化/復号化、圧縮）。 7. アプリケーション層: ネットワークアプリケーションが利用するプロトコル（HTTP、SMTPなど）。"
    },
    {
      "id": "QN.2.1",
      "category": "コンピューターネットワーク",
      "question": "OSI階層、7つ+1副層の名前とそれぞれのサービスをかけ",
      "model_answer": "1. 物理層: ビットを電気信号や光信号に変換して伝送。 2. データリンク層: 隣接ノード間のフレーム転送、エラーチェック、再送。 ・ MAC副層: メディアアクセス制御、共有メディアへのアクセスを管理。 3. ネットワーク層: 異なるネットワーク間でのルーティング、IPアドレッシング。 4. トランスポート層: エンドツーエンドのデータ転送、エラーチェック、再送（TCP/UDP）。 5. セッション層: 通信セッションの確立、管理、終了。 6. プレゼンテーション層: データ形式の変換（エンコード、暗号化）。 7. アプリケーション層: ネットワークアプリケーションが使用するプロトコル（HTTP、SMTP）。"
    },
    {
      "id": "QN.2.2",
      "category": "コンピューターネットワーク",
      "question": "イーサケーブルの中は線が撚られているがなぜか?",
      "model_answer": "ツイストペアケーブルでは、外部の電磁干渉やクロストークを防ぐために、内部のワイヤが撚られている。これにより、信号の品質が向上し、エラーレートが低減される。"
    },
    {
      "id": "QN.2.3",
      "category": "コンピューターネットワーク",
      "question": "ナイキスト限界の式をかき、説明せよ",
      "model_answer": "ナイキスト限界は、ノイズが存在しない通信路での最大データ転送速度を表す式である： C = 2 × B × log_2(M)。ここで、C は最大データ転送速度（bps）、B は通信路の帯域幅（Hz）、M は信号レベルの数である。"
    },
    {
      "id": "QN.2.4",
      "category": "コンピューターネットワーク",
      "question": "デシベルとはなにか.",
      "model_answer": "デシベル（dB）は、2つの信号強度の比率を対数スケールで表す単位で、主に電気信号の強度の比較に使われます。計算式は次の通りである：デシベルは、10 × log_10(P2/P1)の式で表される。"
    },
    {
      "id": "QN.2.5",
      "category": "コンピューターネットワーク",
      "question": "20dBの時のS/Nはいくらか",
      "model_answer": "dB = 10 × log₁₀(S/N)。S/N = 10^(20/10) = 100。したがって、20dBのとき、S/N比は100である。"
    },
    {
      "id": "QN.2.6",
      "category": "コンピューターネットワーク",
      "question": "シャノン限界の式をかき、説明せよ",
      "model_answer": "シャノン限界の式は、ノイズのある通信路における最大データ転送速度を表する：C = B × log_2(1 + S/N)。ここで、C は最大データ転送速度（bps）、B は通信路の帯域幅（Hz）、S/N は信号対雑音比である。"
    },
    {
      "id": "QN.2.7",
      "category": "コンピューターネットワーク",
      "question": "1MHzの帯域で信号対熱雑音比10dBの時の最大データ転送速度を概算せよ",
      "model_answer": "シャノン限界の式に基づいて計算する。S/Nは10dBに変換され、C=1×10^6×log_2(1+10)≈3.46Mbps。したがって、最大データ転送速度は約3.46 Mbpsである。"
    },
    {
      "id": "QN.2.8",
      "category": "コンピューターネットワーク",
      "question": "1.55μm帯の最大伝送速度を概算せよ",
      "model_answer": "1.55μmの光ファイバー帯域では、帯域幅は30THz程度である。S/Nが10dBと仮定すると、最大データ転送速度はシャノン限界の式により、数Tbps程度と見積もられる。"
    },
    {
      "id": "QN.3.1",
      "category": "コンピューターネットワーク",
      "question": "符号を作る上での指針を4つ挙げよ",
      "model_answer": "1. 効率性: 伝送の効率を最大化する。 2. クロック同期: クロック信号が安定して取得できる符号化。 3. エラー検出/訂正: エラーが発生した際に検出および訂正が可能な符号化。 4. ノイズ耐性: ノイズの影響を最小限に抑える符号化。"
    },
    {
      "id": "QN.3.2",
      "category": "コンピューターネットワーク",
      "question": "ベースバンド伝送とパスバンド伝送の違いとその利点を述べよ",
      "model_answer": "ベースバンド伝送は信号をそのままの形で伝送する。短距離通信に適している。一方、パスバンド伝送は信号を特定の周波数帯に載せて伝送するため、長距離通信に適しており、複数の信号を同時に送信できる。"
    },
    {
      "id": "QN.3.3",
      "category": "コンピューターネットワーク",
      "question": "NRZI符号を説明せよ",
      "model_answer": "NRZI符号（Non-Return to Zero Inverted）は、ビット「1」のときに信号レベルが反転し、ビット「0」のときは信号レベルが変わらない符号方式である。長い連続したゼロの状態でもクロック同期が容易である。"
    },
    {
      "id": "QN.3.4",
      "category": "コンピューターネットワーク",
      "question": "QPSKとは",
      "model_answer": "QPSK（Quadrature Phase Shift Keying）は、1シンボルあたり2ビットの情報を持つ位相変調方式で、位相の違いを使ってデータを送信する。データ伝送の効率が高く、携帯通信で広く使用されている。"
    },
    {
      "id": "QN.3.5",
      "category": "コンピューターネットワーク",
      "question": "マンチェスタ符号とは",
      "model_answer": "マンチェスタ符号は、ビットごとの中央で信号の反転が発生する符号化方式で、クロック同期を容易にする。イーサネットなどの物理層で使用される。"
    },
    {
      "id": "QN.3.6",
      "category": "コンピューターネットワーク",
      "question": "8B/10B符号とは",
      "model_answer": "8B/10B符号は、8ビットのデータを10ビットに変換して送信する符号化方式で、DCバランスとクロック同期を保つために使用される。ギガビットイーサネットなどで使用される。"
    },
    {
      "id": "QN.3.7",
      "category": "コンピューターネットワーク",
      "question": "多重化とその方法を分類せよ",
      "model_answer": "多重化は、複数の信号を1本の通信路にまとめて伝送する技術で、以下に分類される：1. FDM（周波数分割多重化）、2. TDM（時分割多重化）、3. CDM（符号分割多重化）。"
    },
    {
      "id": "QN.3.8",
      "category": "コンピューターネットワーク",
      "question": "OFDMとは",
      "model_answer": "OFDM（Orthogonal Frequency Division Multiplexing）は、直交周波数分割多重化方式で、複数の狭い周波数帯で並列にデータを送信する技術。無線通信やWi-Fiで使用される。"
    },
    {
      "id": "QN.3.9",
      "category": "コンピューターネットワーク",
      "question": "CDMAとは",
      "model_answer": "CDMA（Code Division Multiple Access）は、符号分割多重アクセス方式で、同じ周波数帯を複数のユーザーが同時に使用することが可能。携帯通信などで利用されている。"
    },
    {
      "id": "QN.3.10",
      "category": "コンピューターネットワーク",
      "question": "16PSKと16QAMのどちらがどのように良いと考えられるか",
      "model_answer": "16PSKは位相の違いだけを利用するため実装が簡単だが、ノイズ耐性が低い。16QAMは位相と振幅の両方を利用してデータを送信でき、帯域効率が高いが、ノイズには若干弱い。高いデータ伝送効率が求められる場合には16QAMが優れている。"
    },
    {
      "id": "QN.3.11",
      "category": "コンピューターネットワーク",
      "question": "最新と思われる符号を上げ、その符号化方法を解説せよ",
      "model_answer": "最新の符号としてポーラ符号が挙げられる。ポーラ符号は、通信路のエルゴード性に基づく新しい符号化技術で、シャノン限界に近い性能を発揮する。ポーラ符号は通信路の良いビット位置と悪いビット位置を決定し、良いビット位置にデータを配置して符号化される。"
    },
    {
      "id": "QN.4.1",
      "category": "コンピューターネットワーク",
      "question": "データリンク層のサービスは？",
      "model_answer": "データリンク層の主なサービスは次の通り：1. フレーム化、2. エラーチェック、3. 再送機能、4. フロー制御、5. アドレッシング（MACアドレスを使用して、正しい宛先にデータを届ける）。"
    },
    {
      "id": "QN.4.2",
      "category": "コンピューターネットワーク",
      "question": "このサービスを実現するための課題はなにか？",
      "model_answer": "1. 相手の特定（MACアドレスを使用）、2. 誤り検出・訂正、3. フロー制御、4. データのフレーム化。これらを適切に処理する必要がある。"
    },
    {
      "id": "QN.4.3",
      "category": "コンピューターネットワーク",
      "question": "再送を行うために必要な機能はなにか？",
      "model_answer": "1. ACK/NACKメッセージ、2. タイムアウト機能、3. シーケンス番号の付与（再送時の特定を可能にする）。"
    },
    {
      "id": "QN.4.4",
      "category": "コンピューターネットワーク",
      "question": "再送方式を3つ挙げよ。",
      "model_answer": "1. Stop-and-Wait ARQ、2. Go-Back-N ARQ、3. Selective Repeat ARQ。"
    },
    {
      "id": "QN.4.5",
      "category": "コンピューターネットワーク",
      "question": "伝送効率の式をかけ",
      "model_answer": "伝送効率（γ）は、送信にかかる全時間に対して実際にデータを送信している時間の割合： γ = M / T で表される。"
    },
    {
      "id": "QN.4.6",
      "category": "コンピューターネットワーク",
      "question": "伝送誤りを検出する手法について分類せよ",
      "model_answer": "1. パリティチェック（1ビットの誤り検出）、2. チェックサム（ブロック単位の誤り検出）、3. CRC（巡回冗長検査）。"
    },
    {
      "id": "QN.4.7",
      "category": "コンピューターネットワーク",
      "question": "符号語とはなにか？簡単な構成を述べよ",
      "model_answer": "符号語は、データビットにエラーチェックビットを追加したもので、エラーチェックや訂正に使用される。"
    },
    {
      "id": "QN.4.8",
      "category": "コンピューターネットワーク",
      "question": "巡回冗長検査とはどういうものか？性能を述べよ",
      "model_answer": "巡回冗長検査（CRC）は、データを生成多項式で割り、余りを符号として付加するエラーチェック手法。多くの誤りを検出でき、連続した誤りにも強い。"
    },
    {
      "id": "QN.4.9",
      "category": "コンピューターネットワーク",
      "question": "データ 10101 生成多項式G(x)=x³+x+1として巡回冗長検査の符号語を計算せよ",
      "model_answer": "データ「10101」を生成多項式で割り算し、余りが「101」となる。これを符号語に追加することで、符号語は「10101101」となる。"
    },
    {
      "id": "QN.4.10",
      "category": "コンピューターネットワーク",
      "question": "自分のPCのMACアドレスを調べ方を説明せよ",
      "model_answer": "Windowsの場合、「ipconfig /all」を使用してMACアドレスを確認できる。"
    },
    {
      "id": "QN.4.11",
      "category": "コンピューターネットワーク",
      "question": "ハミング符号を説明せよ",
      "model_answer": "ハミング符号は、誤り検出・訂正が可能な誤り訂正符号。データビットに複数のパリティビットを追加し、1ビットの誤りを検出し、自動的に訂正することができる。"
    },
    {
      "id": "QN.4.12",
      "category": "コンピューターネットワーク",
      "question": "2進畳み込み符号を説明せよ",
      "model_answer": "2進畳み込み符号は、過去のビット情報も考慮してデータを符号化する誤り訂正方式。無線通信や衛星通信で使用される。"
    },
    {
      "id": "QN.4.13",
      "category": "コンピューターネットワーク",
      "question": "リードソロモン符号を説明せよ",
      "model_answer": "リードソロモン符号は、誤り訂正を行うための符号で、複数の連続ビットエラーに対して強力な訂正能力を持つ。デジタルテレビ放送やストレージメディアで使用される。"
    },
    {
      "id": "QN.4.14",
      "category": "コンピューターネットワーク",
      "question": "低密度パリティ検査符号を説明せよ",
      "model_answer": "低密度パリティ検査（LDPC）符号は、高い誤り訂正性能を持つ符号。シャノン限界に近い性能を発揮するため、5G通信などで使用される。"
    },
    {
      "id": "QN.5.1",
      "category": "コンピューターネットワーク",
      "question": "メディアアクセス副層のサービスは何か",
      "model_answer": "メディアアクセス副層（MAC副層）は、同じネットワーク内でのデータ伝送の調整を行い、データが衝突しないように制御する。また、物理層にデータを送り出す前に、正しい宛先にデータを届けるために、MACアドレスを利用して通信を行う。"
    },
    {
      "id": "QN.5.2",
      "category": "コンピューターネットワーク",
      "question": "共有通信メディアへのアクセス方式を分類せよ",
      "model_answer": "1. CSMA/CD (Carrier Sense Multiple Access with Collision Detection)、2. CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)、3. TDMA (Time Division Multiple Access)、4. FDMA (Frequency Division Multiple Access)。"
    },
    {
      "id": "QN.5.3",
      "category": "コンピューターネットワーク",
      "question": "CSMA/CDとはどのような方法か",
      "model_answer": "CSMA/CDは、イーサネットで使用されるアクセス制御方式で、デバイスが送信を開始する前にキャリア信号を確認し、データ衝突が起きた場合、送信を停止してランダムな時間待機後に再送信する。"
    },
    {
      "id": "QN.5.4",
      "category": "コンピューターネットワーク",
      "question": "スイッチングハブとはどのようなものか",
      "model_answer": "スイッチングハブは、ネットワーク内の各デバイス間の通信を制御し、データが正しいポートにのみ送られるようにするネットワーク機器である。"
    },
    {
      "id": "QN.5.5",
      "category": "コンピューターネットワーク",
      "question": "全二重を実現する仕組みを説明せよ",
      "model_answer": "全二重通信では、送信と受信を同時に行えるように回線や周波数を分けて双方向の通信が行えるようにする。"
    },
    {
      "id": "QN.5.6",
      "category": "コンピューターネットワーク",
      "question": "この層における無線での問題を説明せよ",
      "model_answer": "無線通信では、電波干渉や信号の減衰、マルチパス伝送、帯域の競合が問題となる。"
    },
    {
      "id": "QN.5.7",
      "category": "コンピューターネットワーク",
      "question": "スロッテッドアロハのスループットの概算式を導出せよ",
      "model_answer": "スロッテッドアロハのスループットSは、Gを送信要求の発生率としてS = Ge^(-G)で表される。"
    },
    {
      "id": "QN.5.8",
      "category": "コンピューターネットワーク",
      "question": "VLANとはなにか",
      "model_answer": "VLAN（仮想LAN）は、物理的なネットワーク構成に依存せず、論理的にネットワークを分割する技術である。"
    },
    {
      "id": "QN.5.9",
      "category": "コンピューターネットワーク",
      "question": "CSMA/CAを例を用いて具体的に説明せよ",
      "model_answer": "CSMA/CAは、無線通信で使用され、データ送信前に他のデバイスが通信中でないことを確認する。送信前にRTS（送信要求）を送り、CTS（送信許可）を受け取ってからデータ送信を行う。"
    },
    {
      "id": "QN.5.10",
      "category": "コンピューターネットワーク",
      "question": "SSIDとはなにか。特徴と役割を具体的に説明せよ",
      "model_answer": "SSID（Service Set Identifier）は、無線ネットワークの識別名であり、アクセスポイントが提供するネットワークに接続するために使用される。"
    },
    {
      "id": "QN.5.11",
      "category": "コンピューターネットワーク",
      "question": "WEPは最近使われていないが、その理由を説明せよ",
      "model_answer": "WEPは、暗号化強度が低く脆弱性があるため、簡単に解読可能であり、現在ではWPAやWPA2などのセキュリティプロトコルが推奨されている。"
    },
    {
      "id": "QN.5.12",
      "category": "コンピューターネットワーク",
      "question": "SDNとはどういうものか",
      "model_answer": "SDN（Software Defined Networking）は、ネットワークの制御をソフトウェアベースで行い、柔軟な管理を可能にする技術である。"
    },
    {
      "id": "QN.5.13",
      "category": "コンピューターネットワーク",
      "question": "ソフトイーサとはどういうものか",
      "model_answer": "ソフトイーサ（SoftEther）は、仮想ネットワークを構築するためのVPNソフトウェアで、異なる拠点間でセキュアな通信を実現する。"
    },
    {
      "id": "QN.6.1",
      "category": "コンピューターネットワーク",
      "question": "ネットワーク層のサービスを書け",
      "model_answer": "ネットワーク層のサービスには、1. パケット転送、2. 論理アドレッシング（IPアドレス）、3. ルーティング、4. フラグメンテーションと再構築が含まれる。"
    },
    {
      "id": "QN.6.2",
      "category": "コンピューターネットワーク",
      "question": "ネットワーク層のサービスを実現するために必要な機能を書け",
      "model_answer": "ルーティング機能、IPアドレス管理、フラグメンテーション、フラグメント再構築などの機能が必要である。"
    },
    {
      "id": "QN.6.3",
      "category": "コンピューターネットワーク",
      "question": "127.0.0.1はなにか",
      "model_answer": "127.0.0.1は、ローカルホスト（自身のコンピュータ）を指すIPアドレスであり、内部通信に使用される。"
    },
    {
      "id": "QN.6.4",
      "category": "コンピューターネットワーク",
      "question": "プライベートアドレスとはなにか",
      "model_answer": "プライベートアドレスは、内部ネットワーク内でのみ使用され、外部のインターネットからはアクセスできないIPアドレスである。"
    },
    {
      "id": "QN.6.5",
      "category": "コンピューターネットワーク",
      "question": "10.35.1.157/19のサブネットマスクを書け",
      "model_answer": "サブネットマスクは、19ビットがネットワーク部分に使用されるため、255.255.224.0である。"
    },
    {
      "id": "QN.6.6",
      "category": "コンピューターネットワーク",
      "question": "10.35.1.157/19のネットワークアドレスを書け",
      "model_answer": "ネットワークアドレスは、10.35.0.0である。"
    },
    {
      "id": "QN.6.7",
      "category": "コンピューターネットワーク",
      "question": "10.35.1.157/19が属するセグメントへのブロードキャストアドレスを書け",
      "model_answer": "ブロードキャストアドレスは、10.35.31.255である。"
    },

    {
      "id": "QN.7.8",
      "category": "コンピューターネットワーク",
      "question": "輻輳制御を５つに分類せよ",
      "model_answer": "輻輳制御には、1. ウィンドウ制御、2. 輻輳回避、3. キューイング、4. フェアネス制御、5. QoS（Quality of Service）の5つの手法がある。"
    },
    {
      "id": "QN.7.9",
      "category": "コンピューターネットワーク",
      "question": "リーキーバケツ、トークンバケツ方式について、その仕組みと目的を明確に説明せよ",
      "model_answer": "リーキーバケツ方式は、一定の速度でデータが送信され、バーストを抑える。一方、トークンバケツ方式は、一定の時間ごとにトークンを生成し、トークンがある限りデータを送信できるため、バースト的な通信が可能である。"
    },
    {
      "id": "QN.7.10",
      "category": "コンピューターネットワーク",
      "question": "AODVのアルゴリズムついて十分に説明せよ",
      "model_answer": "AODV（Ad hoc On-Demand Distance Vector）は、モバイルアドホックネットワークで使用されるオンデマンド型ルーティングプロトコルで、必要な場合にのみ経路を探索し、リンク障害時には経路再探索を行う。"
    },
    {
      "id": "QN.7.11",
      "category": "コンピューターネットワーク",
      "question": "MACアドレスとIPアドレスが両方使われる理由を議論せよ",
      "model_answer": "MACアドレスは物理アドレスで、ローカルネットワーク内でデバイスを識別するのに使われる。一方、IPアドレスは論理アドレッシングに基づき、ネットワーク間でのルーティングを行うために使用される。"
    },
    {
      "id": "QN.7.12",
      "category": "コンピューターネットワーク",
      "question": "BGPのアルゴリズムついて説明せよ",
      "model_answer": "BGP（Border Gateway Protocol）は、異なる自律システム（AS）間で経路情報を交換するためのルーティングプロトコルであり、ASパスに基づいて最適な経路を選択する。"
    },
    {
      "id": "QN.8.1",
      "category": "コンピューターネットワーク",
      "question": "トランスポート層のサービスを書け",
      "model_answer": "トランスポート層のサービスには、1. 信頼性のあるデータ転送、2. フロー制御、3. 輻輳制御、4. 多重化、5. エラー訂正がある。"
    },
    {
      "id": "QN.8.2",
      "category": "コンピューターネットワーク",
      "question": "主なウェルノウンポートを5つ書け",
      "model_answer": "1. HTTP（ポート番号80）、2. HTTPS（ポート番号443）、3. SMTP（ポート番号25）、4. DNS（ポート番号53）、5. FTP（ポート番号21）。"
    },
    {
      "id": "QN.8.3",
      "category": "コンピューターネットワーク",
      "question": "UDPとTCPの違いを書け",
      "model_answer": "TCPはコネクション型で信頼性のあるデータ転送を提供し、再送やフロー制御が行われる。UDPはコネクションレス型で、信頼性がないが高速なデータ転送が可能である。"
    },
    {
      "id": "QN.8.4",
      "category": "コンピューターネットワーク",
      "question": "TCPのコネクション確立方法名を書け",
      "model_answer": "TCPのコネクション確立方法は3ウェイハンドシェイクである。"
    },
    {
      "id": "QN.8.5",
      "category": "コンピューターネットワーク",
      "question": "TCPでデータ長10のデータを送り、正しく受信されるまでの挙動を説明せよ",
      "model_answer": "TCPでは、送信側からACKを受け取りながらデータを送信し、エラーが発生した場合はタイムアウト後に再送する。"
    },
    {
      "id": "QN.8.6",
      "category": "コンピューターネットワーク",
      "question": "TCPでの送信速度制御方法について説明せよ",
      "model_answer": "TCPは、フロー制御と輻輳制御を使って送信速度を制御する。フロー制御では、受信側の処理能力に応じて送信速度を調整し、輻輳制御ではネットワークの混雑を回避する。"
    },
    {
      "id": "EX.8.72",
      "category": "コンピューターネットワーク",
      "question": "Delay-based輻輳制御アルゴリズムを簡単に説明せよ",
      "model_answer": "Delay-based輻輳制御アルゴリズムは、ネットワーク遅延の増加を輻輳の指標として、送信速度を調整する手法である。遅延が増えると送信速度を減少させ、遅延が減ると速度を増加させる。"
    },
    {
      "id": "QN.9.1",
      "category": "コンピューターネットワーク",
      "question": "Domain Name Serverの役割と意義や必要性を説明せよ",
      "model_answer": "DNSは、ドメイン名をIPアドレスに変換する役割を持ち、ユーザーが覚えやすい名前でインターネット上のリソースにアクセスできるようにする。"
    },
    {
      "id": "QN.9.2",
      "category": "コンピューターネットワーク",
      "question": "512バイトを超えるDNSとの通信がどのような場合に発生するか、検討せよ",
      "model_answer": "DNSのメッセージが512バイトを超える場合、DNSSECやIPv6の利用などが原因で、TCPを使用して通信が行われる。"
    },
    {
      "id": "QN.9.3",
      "category": "コンピューターネットワーク",
      "question": "DNSスプーフィングとはなにか",
      "model_answer": "DNSスプーフィングは、攻撃者が偽のDNS情報を注入し、ユーザーを偽のサイトに誘導する攻撃手法である。"
    },
    {
      "id": "QN.9.4",
      "category": "コンピューターネットワーク",
      "question": "512バイトを超えるDNS通信やDNSスプーフィングへの対応策を検討せよ",
      "model_answer": "DNSSECを導入し、DNSの応答にデジタル署名を追加することで、偽のDNS情報を検出できる。また、キャッシュポイズニングの防止やDNSキャッシュのセキュリティ強化も有効である。"
    },
    {
      "id": "QN.9.5",
      "category": "コンピューターネットワーク",
      "question": "DNSの情報伝播速度が遅いとはどういうことか？",
      "model_answer": "DNSの情報伝播速度が遅いというのは、DNSキャッシュの更新が遅く、新しいIPアドレスが反映されるまで時間がかかることを意味する。"
    },
    {
      "id": "QN.9.6",
      "category": "コンピューターネットワーク",
      "question": "BINDとはなにか",
      "model_answer": "BIND（Berkeley Internet Name Domain）は、UNIX系システムで広く使用されているDNSサーバソフトウェアであり、ドメイン名とIPアドレスの対応を管理する。"
    },
    {
      "id": "QN.9.7",
      "category": "コンピューターネットワーク",
      "question": "Namedとはなにか",
      "model_answer": "Namedは、BINDが提供するDNSサーバの実行プログラムで、DNSクエリに応答し、ドメイン名とIPアドレスの解決を行う。"
    },
    {
      "id": "QN.9.8",
      "category": "コンピューターネットワーク",
      "question": "NISとはなにか",
      "model_answer": "NIS（Network Information Service）は、ネットワーク上でユーザーやホスト、グループ情報を集中管理するためのディレクトリサービスで、UNIX系の環境で広く使われる。"
    },
    {
      "id": "QN.9.9",
      "category": "コンピューターネットワーク",
      "question": "LDAPとはなにか",
      "model_answer": "LDAP（Lightweight Directory Access Protocol）は、ディレクトリサービスにアクセスするためのプロトコルで、ユーザーやデバイス情報を階層的に管理する。"
    },
    {
      "id": "QN.9.10",
      "category": "コンピューターネットワーク",
      "question": "Emailにおける、MUA、MTA、MDAの役割を説明せよ",
      "model_answer": "MUA（Mail User Agent）は、メールを作成、送信、受信するクライアントソフトウェア。MTA（Mail Transfer Agent）は、メールをサーバ間で転送する。MDA（Mail Delivery Agent）は、メールをユーザーの受信ボックスに配信する。"
    },
    {
      "id": "QN.9.11",
      "category": "コンピューターネットワーク",
      "question": "POP3とIMAPの違いを説明せよ",
      "model_answer": "POP3はメールをサーバからダウンロードしてローカルに保存する方式で、基本的にサーバから削除される。IMAPは、メールをサーバに保存し、複数のデバイスで同期して利用できる方式。"
    },
    {
      "id": "QN.9.12",
      "category": "コンピューターネットワーク",
      "question": "MIMEとはなにか",
      "model_answer": "MIME（Multipurpose Internet Mail Extensions）は、メールでテキスト以外のデータ（画像、音声、ビデオなど）を送信するためのフォーマットであり、HTTPでも使用される。"
    },
    {
      "id": "QN.9.13",
      "category": "コンピューターネットワーク",
      "question": "SMTPとはなにか",
      "model_answer": "SMTP（Simple Mail Transfer Protocol）は、メールを送信および転送するためのプロトコルで、MTAがサーバ間の通信に使用する。"
    },
    {
      "id": "QN.9.14",
      "category": "コンピューターネットワーク",
      "question": "メールを送受信する際に暗号化が積極的に行われてこなかった理由を考察せよ",
      "model_answer": "メールの暗号化が行われなかった理由には、技術的な複雑さやリソース消費、セキュリティに対する認知不足がある。"
    },
    {
      "id": "QN.10.1",
      "category": "コンピューターネットワーク",
      "question": "WWWとはどういうものか書け",
      "model_answer": "WWW（World Wide Web）は、インターネット上のハイパーテキストリンクを通じて、情報にアクセスできるシステムで、ウェブブラウザを通じて利用される。"
    },
    {
      "id": "QN.10.2",
      "category": "コンピューターネットワーク",
      "question": "HTMLとはなにか",
      "model_answer": "HTML（HyperText Markup Language）は、ウェブページを作成するためのマークアップ言語であり、テキストや画像、リンクの表示方法を定義する。"
    },
    {
      "id": "QN.10.3",
      "category": "コンピューターネットワーク",
      "question": "URLの書式をかけ",
      "model_answer": "URLの書式は、プロトコル://ホスト名:ポート番号/パス?クエリ#フラグメントで表される。例： https://www.example.com:80/path/page.html?query=value#section"
    },
    {
      "id": "QN.10.4",
      "category": "コンピューターネットワーク",
      "question": "HTTPとはなにか、その特徴と通信の概要をかけ",
      "model_answer": "HTTPは、ウェブブラウザとサーバ間でデータを送受信するプロトコルで、ステートレス通信の特徴を持ち、リクエスト/レスポンス型で通信が行われる。"
    },
    {
      "id": "QN.10.5",
      "category": "コンピューターネットワーク",
      "question": "ステータスコードとはなにかを例を挙げて説明せよ",
      "model_answer": "ステータスコードは、HTTPレスポンスでクライアントに返される結果のコードであり、200 OK（成功）、404 Not Found（リソースが見つからない）、500 Internal Server Error（サーバ内部エラー）などがある。"
    },
    {
      "id": "QN.10.6",
      "category": "コンピューターネットワーク",
      "question": "Cookieとはなにか",
      "model_answer": "Cookieは、サーバがユーザーのブラウザに送信する小さなテキストファイルで、セッション情報やログイン状態などを保持するために使用される。"
    },
    {
      "id": "QN.10.9",
      "category": "コンピューターネットワーク",
      "question": "PHP,Javascriptとは何か、両者の違いを意識して回答せよ",
      "model_answer": "PHPはサーバーサイドで動作するスクリプト言語で、データベースとのやりとりや動的なページの生成に使用される。JavaScriptはクライアントサイドで動作するスクリプト言語で、インタラクティブなウェブページを作成するために使われる。"
    },
    {
      "id": "QN.10.10",
      "category": "コンピューターネットワーク",
      "question": "AJAXとは何か",
      "model_answer": "AJAX（Asynchronous JavaScript and XML）は、ページをリロードせずにサーバと非同期通信を行い、部分的なデータ更新を行う技術で、ユーザーの体験を向上させる。"
    },
    {
      "id": "QN.10.11",
      "category": "コンピューターネットワーク",
      "question": "Amazon AWSとはなにか",
      "model_answer": "Amazon AWS（Amazon Web Services）は、クラウドコンピューティングプラットフォームで、ストレージやコンピューティング、データベースなどのサービスをオンデマンドで提供する。"
    },
    {
      "id": "QN.10.12",
      "category": "コンピューターネットワーク",
      "question": "DHCPとは何か",
      "model_answer": "DHCP（Dynamic Host Configuration Protocol）は、ネットワーク上のデバイスに自動的にIPアドレスやネットワーク設定を割り当てるプロトコルである。"
    },
    {
      "id": "QN.10.13",
      "category": "コンピューターネットワーク",
      "question": "NATとは何か",
      "model_answer": "NAT（Network Address Translation）は、ローカルネットワーク内のプライベートIPアドレスを、外部通信時にグローバルIPアドレスに変換する技術で、複数のデバイスが1つのIPアドレスを共有してインターネットに接続できる。"
    },
    {
      "id": "QN.10.16",
      "category": "コンピューターネットワーク",
      "question": "MIMEとはなにか．HTTPでMIMEが使われる理由をかけ",
      "model_answer": "MIME（Multipurpose Internet Mail Extensions）は、メールやHTTPを介してテキスト以外のデータ（画像、音声、動画など）を送信するためのフォーマットであり、HTTPではサーバが送信するコンテンツの種類をブラウザに伝えるために使用される。"
    },
    {
      "id": "QN.12.1",
      "category": "コンピューターネットワーク",
      "question": "Web APIとは",
      "model_answer": "Web APIは、アプリケーション間でデータや機能を提供するためのインターフェースで、HTTPリクエストを介してリソースの作成、読み取り、更新、削除（CRUD操作）を要求できる。"
    },
    {
      "id": "QN.12.2",
      "category": "コンピューターネットワーク",
      "question": "ウェブサーバの負荷分散アルゴリズムはどのようなものか説明せよ",
      "model_answer": "ウェブサーバの負荷分散アルゴリズムには、ラウンドロビン方式、加重ラウンドロビン方式、IPハッシュ方式、最小コネクション方式などがある。"
    },
    {
      "id": "QN.12.3",
      "category": "コンピューターネットワーク",
      "question": "データセンターはどのようなものか説明せよ",
      "model_answer": "データセンターは、サーバ、ストレージ、ネットワーク設備を集約し、企業やインターネットサービスプロバイダーの基盤としてデータの保管や処理を行う施設である。"
    },
    {
      "id": "QN.12.4",
      "category": "コンピューターネットワーク",
      "question": "CDN (Content Delivery Network) はどのようなものか説明せよ",
      "model_answer": "CDNは、コンテンツを複数の地理的に分散したサーバにキャッシュし、ユーザーが最も近いサーバからコンテンツを取得できるようにするネットワークで、ウェブページの読み込み速度を向上させる。"
    },
    {
      "id": "QN.12.5",
      "category": "コンピューターネットワーク",
      "question": "ASPはどのようなものか説明せよ",
      "model_answer": "ASP（Application Service Provider）は、アプリケーションをインターネットを介して提供するサービスモデルで、ユーザーはソフトウェアをインストールせず、ブラウザを通じてアプリケーションを利用できる。"
    },
    {
      "id": "QN.12.6",
      "category": "コンピューターネットワーク",
      "question": "検索エンジンはどのようなものか説明せよ",
      "model_answer": "検索エンジンは、ウェブ上の情報をクロールし、インデックス化して、ユーザーの検索クエリに対して最適な結果を返すシステムであり、Google、Bingなどが代表的である。"
    },
    {
      "id": "QN.12.7",
      "category": "コンピューターネットワーク",
      "question": "NATの問題を挙げよ",
      "model_answer": "NATの主な問題点は、エンドツーエンドの接続性が失われること、設定ミスによるセキュリティリスクがあること、アドレス変換によるトラフィックの遅延が発生することである。"
    },
    {
      "id": "QN.12.8",
      "category": "コンピューターネットワーク",
      "question": "UDPを使えばマルチキャストによる配信が可能であるが、帯域を消費しやすいTCP通信が使われる理由を説明せよ",
      "model_answer": "TCPは、信頼性のあるデータ転送を提供するため、エラー検出や再送機能が含まれている。UDPは高速だが信頼性が低く、データの欠落や順序が狂う可能性があるため、信頼性が求められるアプリケーションではTCPが使用される。"
    },
    {
      "id": "QN.12.9",
      "category": "コンピューターネットワーク",
      "question": "BitTorrentの仕組みを説明せよ",
      "model_answer": "BitTorrentは、ファイルを複数のピア（ユーザー）に分散しながらダウンロードするP2Pファイル共有プロトコルで、各ユーザーがファイルの一部をアップロード・ダウンロードすることで帯域の効率化を図る。"
    },
    {
      "id": "QN.12.10",
      "category": "コンピューターネットワーク",
      "question": "SaaS、PaaS、IaaSとはなにか，説明せよ",
      "model_answer": "SaaSはアプリケーションをインターネット経由で提供するサービス、PaaSはアプリケーション開発のプラットフォームを提供するサービス、IaaSは仮想マシンやネットワークをオンデマンドで提供するサービスである。"
    },
    {
      "id": "QN.12.11",
      "category": "コンピューターネットワーク",
      "question": "ASPやクラウドサービスの難しい点を列挙せよ",
      "model_answer": "クラウドサービスの難しい点には、セキュリティの確保、サービス停止時の影響、プロバイダ依存、インターネット帯域によるパフォーマンスの変動が挙げられる。"
    },

    {
      "id": "QN.13.1",
      "category": "コンピューターネットワーク",
      "question": "セカンドプライスオークションの支払い額を講義の表を使って説明してください",
      "model_answer": "セカンドプライスオークションでは、最高価格を提示した者が勝者となるが、支払額は2番目に高い入札額となる。例えば、最高入札額が100ドルで、2番目の入札額が90ドルだった場合、勝者は90ドルを支払う。"
    },
    {
      "id": "QN.13.2",
      "category": "コンピューターネットワーク",
      "question": "VCGオークションの支払い額を講義の表を使って説明してください",
      "model_answer": "VCG（Vickrey-Clarke-Groves）オークションでは、各プレイヤーは自身の影響を考慮した最適な支払い額を決定する。具体的には、他のプレイヤーが支払う総額から、該当プレイヤーが参加しなかった場合の価値を差し引いた額を支払う。"
    },
    {
      "id": "QN.13.3",
      "category": "コンピューターネットワーク",
      "question": "ベイジアンアベレージを講義の表を使って説明してください",
      "model_answer": "ベイジアンアベレージは、データが少ない場合でも確実な推定値を得るための方法である。例えば、少数の高評価だけで過剰にランクが上がらないように、全体の評価分布に基づいて平均を調整する。"
    },
    {
      "id": "QN.15.1",
      "category": "コンピューターネットワーク",
      "question": "セキュリティ事案の主な概念的原因をかけ",
      "model_answer": "セキュリティ事案の主な原因には、パスワードの誤使用や設定ミス、システムの脆弱性、外部からのハッキング、内部の従業員による情報漏洩が含まれる。"
    },
    {
      "id": "QN.15.2",
      "category": "コンピューターネットワーク",
      "question": "現代暗号の特徴をかけ",
      "model_answer": "現代暗号の特徴として、公開鍵暗号と秘密鍵暗号の組み合わせ、ハッシュ関数によるデータの整合性確認、量子耐性暗号の研究などが挙げられる。"
    },
    {
      "id": "QN.15.3",
      "category": "コンピューターネットワーク",
      "question": "署名の方法をかけ",
      "model_answer": "署名者は秘密鍵でデータのハッシュ値に署名し、受信者は公開鍵を使って署名を検証し、データが改ざんされていないことを確認する。"
    },
    {
      "id": "QN.15.4",
      "category": "コンピューターネットワーク",
      "question": "PKIとはなにか",
      "model_answer": "PKI（Public Key Infrastructure）は、公開鍵と個人や組織を結びつける仕組みで、デジタル証明書を通じて信頼された通信を行う。認証局（CA）が中央役を担う。"
    },
    {
      "id": "QN.15.5",
      "category": "コンピューターネットワーク",
      "question": "IPsecとはなにか",
      "model_answer": "IPsec（Internet Protocol Security）は、ネットワーク上の通信を暗号化し、認証やデータの整合性を提供するプロトコルスイート。VPNやセキュアな通信に使用される。"
    },
    {
      "id": "QN.15.6",
      "category": "コンピューターネットワーク",
      "question": "チャレンジ・レスポンス認証の方法をかけ",
      "model_answer": "チャレンジ・レスポンス認証は、サーバがランダムなチャレンジをクライアントに送り、クライアントが秘密鍵を使って応答することで認証を行う方法で、パスワードがネットワーク上に平文で送信されない。"
    },
    {
      "id": "QN.15.7",
      "category": "コンピューターネットワーク",
      "question": "ケルベロスとはなにか",
      "model_answer": "ケルベロスは、安全なネットワーク認証を提供するプロトコルで、認証サーバを使い、ユーザーとサービス間でセキュリティトークンを発行する。"
    },
    {
      "id": "QN.15.8",
      "category": "コンピューターネットワーク",
      "question": "SSLとはなにか",
      "model_answer": "SSL（Secure Sockets Layer）は、インターネット上で安全な通信を確立するためのプロトコルであり、現在はTLS（Transport Layer Security）に置き換わっている。"
    },
    {
      "id": "QN.15.9",
      "category": "コンピューターネットワーク",
      "question": "ファイヤーウォールとはなにか",
      "model_answer": "ファイヤーウォールは、ネットワークの境界でトラフィックをフィルタリングし、外部からの不正アクセスや攻撃を防ぐセキュリティシステムである。"
    },
    {
      "id": "QN.15.10",
      "category": "コンピューターネットワーク",
      "question": "非武装地帯とはなにか",
      "model_answer": "非武装地帯（DMZ）は、内部ネットワークと外部ネットワークの間に配置されたセキュリティゾーンで、外部からのアクセスを制御するために使用される。"
    },
    {
      "id": "Ex11.9",
      "category": "コンピューターネットワーク",
      "question": "PGPとはなにか",
      "model_answer": "PGP（Pretty Good Privacy）は、メールやファイルの暗号化と署名を行うためのソフトウェアで、公開鍵と秘密鍵の組み合わせを使って安全な通信を実現する。"
    },
    {
      "id": "Ex11.10",
      "category": "コンピューターネットワーク",
      "question": "匿名リメーラとはなにか",
      "model_answer": "匿名リメーラは、送信者のアドレスを隠して電子メールを送信するサービスで、送信者情報を消去してから宛先に転送することで、送信者の匿名性を保つ。"
    },
    {
      "id": "Ex11.11",
      "category": "コンピューターネットワーク",
      "question": "ネットワーク上での脅威を列挙せよ",
      "model_answer": "ネットワーク上の脅威には、マルウェア、フィッシング、DDoS攻撃、中間者攻撃、ランサムウェアなどがある。"
    },
    {
      "id": "QN.151",
      "category": "コンピューターネットワーク",
      "question": "パブリックブロックチェーンとプライベートブロックチェーンの違いを書け",
      "model_answer": "パブリックブロックチェーンは誰でも参加でき、分散型で透明性が高い。プライベートブロックチェーンは招待制で管理者が存在し、トランザクションが非公開で管理される。"
    },
  ],
  "seimeitojouhou": [{

      "id": 1,
      "category": "生命と情報",
      "question": "ダーウィンが考えた進化に必要な４つの柱とは何ですか？",
      "model_answer": "1. 変異：集団内の個体はそれぞれ異なる特徴を持っている。2. 遺伝：親の特徴が子に受け継がれる。3. 適応度の差：特定の環境下では、ある変異が他よりも生存に有利である。4. 自然淘汰：適応度の高い個体がより多くの子孫を残すことで、その特徴が広がる。"
    },
    {
      "id": 2,
      "category": "生命と情報",
      "question": "進化をもたらすダイナミクスには自然淘汰のほかにどのようなものがありますか？",
      "model_answer": "突然変異、遺伝的浮動、遺伝子流動、性選択"
    },
    {
      "id": 3,
      "category": "生命と情報",
      "question": "進化アルゴリズムの一般的な計算行程を５つのステップを踏まえて説明してください。",
      "model_answer": "1. 初期集団の生成：ランダムに個体を生成する。2. 適応度評価：各個体の適応度を計算する。3. 親選択：適応度に基づいて親となる個体を選ぶ。4. 交叉と突然変異：親の遺伝子を組み合わせて新しい個体を生成し、突然変異を加える。5. 世代交代：次世代の集団を形成し、これを繰り返す。"
    },
    {
      "id": 4,
      "category": "生命と情報",
      "question": "ナップサック問題でお菓子のカロリー最大化のコーディングと致死遺伝子の対策について説明してください。",
      "model_answer": "同一のお菓子を複数購入する場合、遺伝子座に購入個数を表す整数値を持たせる。致死遺伝子の対策としては、ナップサック問題における致死遺伝子の対策は、遺伝的アルゴリズムでナップサックの容量を超えるような個体（解）が生成された際、その個体が不適切な解として処理されることを防ぐための手法です。主な対策としては以下の3つがあります。1.ペナルティ関数: 容量を超える個体の適応度（フィットネス）を0や低く設定し、その個体が進化に残りにくくする。2.修正演算子: 容量を超えた個体を修正し、重さが制限内に収まるように一部のお菓子を除去して調整する。3.淘汰: 容量を超えた致死遺伝子を持つ個体を次世代に伝えず、直接排除する。 "
    },
    {
      "id": 5,
      "category": "生命と情報",
      "question": "ランキング法とは何か？その利点について説明してください。",
      "model_answer": "ランキング法では、全個体を適応度に基づいて順位付けし、順位に基づいて親を選ぶ。適応度に比例して親を選ぶ方法と比べて、最良個体が過度に選ばれるのを防ぎ、遺伝的多様性を保つ利点がある。"
    },
    {
      "id": 6,
      "category": "生命と情報",
      "question": "ベルマン方程式とは何ですか？",
      "model_answer": "ベルマン方程式は、ある状態での報酬と、その後の行動による将来の報酬の合計を最大化するための方程式です。強化学習で状態価値を計算する際に用います。"
    },
    {
      "id": 7,
      "category": "生命と情報",
      "question": "TD学習とは何の価値を推定する学習法ですか？",
      "model_answer": "TD学習は、状態価値を推定する。更新式は次の通り：V(s) ← V(s) + α[R + γV(s') - V(s)]"
    },
    {
      "id": 8,
      "category": "生命と情報",
      "question": "SARSA学習とは何の価値を推定する学習法ですか？",
      "model_answer": "SARSAは、状態・行動ペアの価値を推定する学習法。更新式は次の通り：Q(s,a) ← Q(s,a) + α[R + γQ(s',a') - Q(s,a)]"
    },
    {
      "id": 9,
      "category": "生命と情報",
      "question": "Q学習とは何の価値を推定する学習法ですか？",
      "model_answer": "Q学習は、状態・行動ペアの価値を推定する学習法です。更新式は次の通り：Q(s,a) ← Q(s,a) + α[R + γ max(Q(s',a')) - Q(s,a)]"
    },
    {
      "id": 10,
      "category": "生命と情報",
      "question": "行動選択の方法：εグリーディ法とソフトマックス法を説明してください。",
      "model_answer": "εグリーディ法は、確率εでランダムな行動を選び、確率1-εで最も価値の高い行動を選択します。ソフトマックス法は、行動の価値に応じて確率的に選択します。これらの方法は、探索と利用のバランスを取るために有効です。"
    },
    {
      "id": 11,
      "category": "生命と情報",
      "question": "アクタークリティックの説明をしてください。",
      "model_answer": "アクタークリティックは、行動選択を担当する「アクター」と、価値の評価を行う「クリティック」に分けて学習を行います。アクターが行動を決定し、クリティックがその行動の評価を行い、アクターが学習します。"
    },
    {
      "id": 12,
      "category": "生命と情報",
      "question": "神経回路網を使うと有利な点と使わない場合の代替事例を説明してください。",
      "model_answer": "使用例: ファイアウォール、ルーティング、パケットフィルタリング•	ルールベースのシステムは、事前に定義されたルールに従って動作します。例えば、ファイアウォールではトラフィックを許可または禁止するためのルールを定義し、それに基づいて通信を制御します。同様に、ネットワークルーターはルーティングテーブルに基づいてパケットを転送します。"
    },
    {
      "id": 13,
      "category": "生命と情報",
      "question": "発火頻度と発火間隔を例を使って説明してください。",
      "model_answer": "発火頻度は、神経細胞がどれだけ頻繁に信号を送るかを示し、発火間隔は信号の間隔を示します。たとえば、痛みの強さを感じる際には発火頻度が高まり、弱い刺激では間隔が長くなります。"
    },
    {
      "id": 14,
      "category": "生命と情報",
      "question": "マッカローピッツのニューラルネットワークモデルの式を説明してください。",
      "model_answer": "y = Σ(w_i x_i) - θ。yは出力、w_iはシナプスの重み、x_iは前層の出力、θは閾値。"
    },
    {
      "id": 15,
      "category": "生命と情報",
      "question": "活性化関数の役割を説明してください。",
      "model_answer": "活性化関数は、ニューラルネットワークの出力を非線形に変換し、複雑なパターンを学習できるようにする役割を持ちます。一般的な活性化関数にはシグモイド関数、ReLU、tanhなどがあります。"
    },
    {
      "id": 16,
      "category": "生命と情報",
      "question": "ニューラルネットワークの学習と強化学習の違いを説明してください。",
      "model_answer": "ニューラルネットワークは、入力と対応する正解を使って誤差を減少させるように学習します。一方、強化学習は、環境との相互作用を通じて報酬を最大化する行動を学習します。"
    },
    {
      "id": 17,
      "category": "生命と情報",
      "question": "バックプロパゲーションの更新式を説明してください。",
      "model_answer": "バックプロパゲーションは、ニューラルネットワークの学習アルゴリズムで、重みとバイアスを以下の手順で更新します。1. 誤差の計算: 出力層での誤差を計算します。2. 誤差の逆伝播: 出力層から入力層に向かって誤差を伝播させます。3. 勾配の計算: 各層での誤差に基づいて重みとバイアスの勾配（損失に対する変化量）を計算します。4. 重みとバイアスの更新: 学習率 \( \eta \) を使って、次の式で重みとバイアスを更新します。- 重み: \( w \leftarrow w - \eta \cdot \frac{\partial L}{\partial w} \)- バイアス: \( b \leftarrow b - \eta \cdot \frac{\partial L}{\partial b} \)これにより、誤差を最小化するようにネットワークを調整します。"
    },
    {
      "id": 18,
      "category": "生命と情報",
      "question": "オーバーフィッティングとは何ですか？",
      "model_answer": "オーバーフィッティングとは、学習したモデルが訓練データに過度に適応し、新しいデータに対してうまく汎化できない状態のことです。"
    },
    {
      "id": 19,
      "category": "生命と情報",
      "question": "ライオンの群れのサイズについてのSiblyの説明をしてください。",
      "model_answer": "Siblyは、群れのサイズが個体の適応度に影響を与えるとし、最適な群れのサイズは個体あたりの利益が最大となる点で決まるとしました。しかし、社会的要因や環境の変動により、理論的に最適とされるサイズから逸脱することがあるとしています。"
    },
    {
      "id": 20,
      "category": "生命と情報",
      "question": "クレイグ・レイノルズのBoidsモデルを説明してください。",
      "model_answer": "Boidsモデルは、個体（ボイド）が周囲の個体と協調して群れ行動をするシミュレーションモデルです。基本ルールは、1. 分離：個体同士が衝突しないようにする、2. 整列：周囲の個体と同じ方向に動く、3. 結束：群れの中心に向かう動きです。これにより群れ行動が自然に形成されます。"
    }
  ]
};

let currentCategory = null;
let currentQuestionIndex = 0;
let usedQuestions = []; // 出題済みの質問IDを保存する配列
let correctAnswers = 0; // 正解数を追跡
let totalAnswered = 0; // 解答した質問数
let correctQuestions = []; // 正解した質問のリスト
let incorrectQuestions = []; // 不正解の質問のリスト
let remainingChart = null;
let accuracyChart = null;

// 分野を選択する関数
function selectCategory() {
  const categorySelect = document.getElementById('category-select');
  currentCategory = categorySelect.value;

  // カテゴリが選択されていない場合は処理を停止
  if (!currentCategory) {
    alert("科目を選択してください");
    return;
  }

  // 初期化
  usedQuestions = [];
  correctAnswers = 0;
  totalAnswered = 0;
  correctQuestions = [];
  incorrectQuestions = [];

  nextQuestion(); // 最初の質問を表示
  initializeCharts(); // グラフを初期化
}

// 次の質問を表示する関数
function nextQuestion() {
  if (!currentCategory) {
    alert("科目を選択してください");
    return;
  }

  const categoryQuestions = questions[currentCategory];
  if (categoryQuestions.length === usedQuestions.length) {
    alert("全ての質問に回答しました");
    return;
  }

  // 未使用の質問をランダムに選択
  do {
    currentQuestionIndex = Math.floor(Math.random() * categoryQuestions.length);
  } while (usedQuestions.includes(currentQuestionIndex));

  usedQuestions.push(currentQuestionIndex);
  displayQuestion();
}

// 質問をHTMLに表示する関数
function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const currentQuestion = questions[currentCategory][currentQuestionIndex];

  // 質問をHTMLに表示
  questionContainer.innerHTML = `<strong>Q${usedQuestions.length}: ${currentQuestion.question}</strong>`;

  // 回答欄と結果をクリア
  document.getElementById('user-answer').value = ''; // テキストエリアをクリア
  document.getElementById('comparison-container').innerHTML = ''; // 結果表示をクリア
}

// ユーザーの回答と模範解答を比較する関数
function checkAnswer() {
  const userAnswer = document.getElementById('user-answer').value;
  const modelAnswer = questions[currentCategory][currentQuestionIndex].model_answer;

  const comparisonContainer = document.getElementById('comparison-container');
  comparisonContainer.innerHTML = `
      <h3>比較結果</h3>
      <p><strong>あなたの回答:</strong><br>${userAnswer}</p>
      <p><strong>模範解答:</strong><br>${modelAnswer}</p>
  `;
}

// ユーザーが正解/不正解を選択する関数
function markAnswer(isCorrect) {
  totalAnswered++;
  const currentQuestion = questions[currentCategory][currentQuestionIndex];

  if (isCorrect) {
    correctAnswers++;
    correctQuestions.push(currentQuestion.question);
  } else {
    incorrectQuestions.push(currentQuestion.question);
  }

  updateQuestionLists();
  updateCharts();
}

// 正解/不正解の質問リストを更新する関数
function updateQuestionLists() {
  const correctList = document.getElementById('correct-questions');
  const incorrectList = document.getElementById('incorrect-questions');

  // 正解した質問のリストを更新
  correctList.innerHTML = correctQuestions.map(question => `<li>${question}</li>`).join('');

  // 不正解の質問のリストを更新
  incorrectList.innerHTML = incorrectQuestions.map(question => `<li>${question}</li>`).join('');
}

// チャートを初期化する関数
function initializeCharts() {
  const remainingCtx = document.getElementById('remainingChart').getContext('2d');
  const accuracyCtx = document.getElementById('accuracyChart').getContext('2d');

  // 残りの質問数の円グラフ
  remainingChart = new Chart(remainingCtx, {
    type: 'pie',
    data: {
      labels: ['残りの質問', '解答済み'],
      datasets: [{
        label: '残りの質問',
        data: [questions[currentCategory].length, 0], // 初期データ
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });

  // 正答率の円グラフ
  accuracyChart = new Chart(accuracyCtx, {
    type: 'pie',
    data: {
      labels: ['正解', '不正解'],
      datasets: [{
        label: '正答率',
        data: [0, 0], // 初期データ
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });
}

// チャートとテキストを更新する関数
function updateCharts() {
  const remainingQuestions = questions[currentCategory].length - totalAnswered;
  const answeredQuestions = totalAnswered;
  const correctRatio = totalAnswered > 0 ? correctAnswers : 0;
  const incorrectRatio = totalAnswered - correctAnswers;

  // 残りの質問数のチャートを更新
  remainingChart.data.datasets[0].data = [remainingQuestions, answeredQuestions];
  remainingChart.update();

  // 正答率のチャートを更新
  accuracyChart.data.datasets[0].data = [correctRatio, incorrectRatio];
  accuracyChart.update();

  // 残りの質問数と正答率をテキストで表示
  document.getElementById('remainingText').innerText = remainingQuestions;
  document.getElementById('accuracyText').innerText = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
}