// HTML 문서가 완전히 로드된 후 스크립트가 실행되도록 합니다.
document.addEventListener('DOMContentLoaded', function () {
    
    // --- '기술소개 자료' 섹션의 카테고리 탭 기능 ---
    const categoryBtns = document.querySelectorAll('.tech_category button');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () { 
            // plus_btn을 제외한 모든 버튼에서 'active' 클래스를 제거합니다.
            categoryBtns.forEach(b => {
                if (!b.classList.contains('plus_btn')) {
                    b.classList.remove('active');
                }
            }); 
            // 클릭된 버튼이 plus_btn이 아닐 경우에만 'active' 클래스를 추가합니다.
            if (!this.classList.contains('plus_btn')) {
                this.classList.add('active'); 
            }
        });
    });

    // --- 'KERI 소식' 섹션의 탭 기능 ---
    const noticeTabs = document.querySelectorAll('.notice_tabs button[data-tab]');
    const noticePanels = document.querySelectorAll('.notice_tab_panel');

    noticeTabs.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('plus_btn')) {
                noticeTabs.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const tab = this.getAttribute('data-tab');
                noticePanels.forEach(panel => {
                    if (panel.getAttribute('data-tab') === tab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            }
        });
    });

    // --- 'SNS' 섹션의 탭 기능 ---
    const snsTabs = document.querySelectorAll('.SNS_tabs button[data-sns]');
    const snsPanels = document.querySelectorAll('.SNS_tab_panel');

    snsTabs.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('plus_btn')) {
                snsTabs.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const tab = this.getAttribute('data-sns');
                snsPanels.forEach(panel => {
                    if (panel.getAttribute('data-sns') === tab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            }
        });
    });
});
