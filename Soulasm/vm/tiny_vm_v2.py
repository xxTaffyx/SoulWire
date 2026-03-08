# SoulASM Virtual Machine v0.002
# Now with memory access and control flow!

class SoulVM:
    def __init__(self):
        self.memory = [0] * 256
        self.pc = 0
        self.accumulator = 0
        self.running = True
        
        # Expanded instruction set
        self.opcodes = {
            0x00: self.halt,
            0x01: self.load,
            0x02: self.add,
            0x03: self.print,
            0x04: self.store,   # NEW: Store accumulator to memory
            0x05: self.sub,     # NEW: Subtract
            0x06: self.jump,    # NEW: Jump to address
            0x07: self.jz,      # NEW: Jump if zero
            0x08: self.mul,     # NEW: Multiply
            0x09: self.div,     # NEW: Divide
            0x0A: self.mod,     # NEW: Modulo
            0x0B: self.and_op,  # NEW: Bitwise AND
            0x0C: self.or_op,   # NEW: Bitwise OR
            0x0D: self.xor_op,  # NEW: Bitwise XOR
            0x0E: self.not_op,  # NEW: Bitwise NOT
            0x0F: self.shl,     # NEW: Shift left
            0x10: self.shr,     # NEW: Shift right
            0x11: self.rol      # NEW: Rotate left
            0x12: self.ror      # NEW: Rotate right

        }
        
        print("SoulVM v0.002 - Now with control flow!")
    
    def halt(self):
        self.running = False
        print("Soul rests.")
    
    def load(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator = value
    
    def add(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator += value
    
    def sub(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator -= value

    def mul(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator *= value
    
    def div(self):
        self.pc += 1
        value = self.memory[self.pc]
        if value != 0:
            self.accumulator //= value
        else:
            print("Division by zero! Soul is confused.")
            self.running = False

    def mod(self):
        self.pc += 1
        value = self.memory[self.pc]
        if value != 0:
            self.accumulator %= value
        else:
            print("Modulo by zero! Soul is confused.")
            self.running = False
    
    def and_op(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator &= value
    
    def or_op(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator |= value

    def xor_op(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator ^= value

    def not_op(self):
        self.accumulator = ~self.accumulator

    def shl(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator <<= value
    
    def shr(self):
        self.pc += 1
        value = self.memory[self.pc]
        self.accumulator >>= value

    def rol(self):
        self.pc += 1
        value = self.memory[self.pc] % 8
        self.accumulator = ((self.accumulator << value) | (self.accumulator >> (8 - value))) & 0xFF

    def ror(self):
        self.pc += 1
        value = self.memory[self.pc] % 8
        self.accumulator = ((self.accumulator >> value) | (self.accumulator << (8 - value))) & 0xFF


    
    def print(self):
        print(f"Soul speaks: {self.accumulator}")
    
    def store(self):
        # Store accumulator at memory address
        self.pc += 1
        address = self.memory[self.pc]
        self.memory[address] = self.accumulator
    
    def jump(self):
        # Jump to address
        self.pc += 1
        self.pc = self.memory[self.pc] - 1  # -1 because pc++ happens after
    
    def jz(self):
        # Jump if accumulator is zero
        self.pc += 1
        if self.accumulator == 0:
            self.pc = self.memory[self.pc] - 1
    
    def run(self, program=None):
        if program:
            for i, byte in enumerate(program):
                self.memory[i] = byte
        
        while self.running and self.pc < 256:
            opcode = self.memory[self.pc]
            if opcode in self.opcodes:
                self.opcodes[opcode]()
            else:
                print(f"Unknown opcode: {opcode} at PC: {self.pc}")
                self.running = False
            self.pc += 1

# Test with a simple countdown
if __name__ == "__main__":
    vm = SoulVM()
    
    # Simple test first - USING CORRECT OPCODES
    program = [
        0x01, 3,    # LOAD 3
        0x03,       # PRINT (should show 3)
        0x05, 1,    # SUB 1 (0x05 is SUB, not 0x02!)
        0x03,       # PRINT (should show 2)
        0x05, 1,    # SUB 1
        0x03,       # PRINT (should show 1)
        0x05, 1,    # SUB 1
        0x03,       # PRINT (should show 0)
        0x00        # HALT
    ]
    
    print("\nSimple countdown (no loops yet):")
    vm.run(program)